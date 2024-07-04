import { useForm, Controller } from 'react-hook-form';
import { Text } from 'react-native';
import { Button, Form, Input } from 'tamagui';
import { useShallow } from 'zustand/react/shallow';

import { SignInPayload } from './sign-in.fetch';
import useSignInStore from './sign-in.store';
import { AuthInput } from '../components/Input';

const SignInForm: React.FC = () => {
  const signIn = useSignInStore(useShallow((state) => state.signIn));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <Controller
        control={control}
        rules={{
          required: 'required',
        }}
        render={(renderProps) => (
          <AuthInput
            formName="signIn"
            textContentType="username"
            autoCapitalize={'none'}
            {...renderProps}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: 'required',
        }}
        render={(renderProps) => (
          <AuthInput
            formName={'signIn'}
            textContentType="password"
            secureTextEntry={true}
            {...renderProps}
          />
        )}
        name="password"
      />

      <Form.Trigger asChild>
        <Button theme="active">Submit</Button>
      </Form.Trigger>
    </Form>
  );
};

export default SignInForm;
