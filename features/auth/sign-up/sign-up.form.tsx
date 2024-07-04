import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Form, Text } from 'tamagui';

import { SignUpPayload } from './sign-up.fetch';
import useSignUpStore from './sign-up.store';
import { AuthInput } from '../components/Input';

const SignUpForm: React.FC = () => {
  const [t] = useTranslation();
  const { push } = useRouter();
  const [signUp, success, serverError, reset] = useSignUpStore((state) => [
    state.signUp,
    state.success,
    state.error,
    state.reset,
  ]);
  useEffect(() => {
    if (success) {
      push('/sign-in');
      reset();
    }
  }, [success, push]);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpPayload>({
    defaultValues: {
      username: '',
      password: '',
      passwordRepeat: '',
    },
  });

  useEffect(() => {
    if (serverError) {
      console.log('Server error effect');
      serverError.message.map((error) => {
        const entries = Object.entries(error.error);
        console.log(error.field);
        console.log({
          type: serverError.statusCode.toString(),
          message: entries[0][0],
        });
        setError(error.field as any, {
          type: serverError.statusCode.toString(),
          message: entries[0][0],
        });
      });
    }
  }, [serverError, setError]);

  return (
    <Form onSubmit={handleSubmit(signUp)} id="signUp">
      <Controller
        control={control}
        rules={{
          required: 'required',
        }}
        render={(renderProps) => (
          <AuthInput
            formName="signUp"
            autoCapitalize={'none'}
            textContentType="username"
            {...renderProps}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: 'required',
          min: {
            value: 8,
            message: 'min-length',
          },
          maxLength: {
            value: 20,
            message: 'max-length',
          },
        }}
        render={(renderProps) => (
          <AuthInput
            formName="signUp"
            textContentType="password"
            passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
            secureTextEntry={true}
            {...renderProps}
          />
        )}
        name="password"
      />

      <Controller
        control={control}
        rules={{
          required: 'required',
          validate: (value, formValues) => {
            return value === formValues.password || 'notIdentical';
          },
        }}
        render={(renderProps) => (
          <AuthInput
            formName={'signUp'}
            textContentType="password"
            passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
            secureTextEntry={true}
            {...renderProps}
          />
        )}
        name="passwordRepeat"
      />

      <Form.Trigger asChild>
        <Button theme="active">{t('signUp.submit')}</Button>
      </Form.Trigger>
    </Form>
  );
};

export default SignUpForm;
