import { useForm, Controller } from "react-hook-form";
import { Text } from "react-native";
import { Button, Form, Input } from "tamagui";
import { useShallow } from "zustand/react/shallow";

import { SignInPayload } from "./sign-in.fetch";
import useSignInStore from "./sign-in.store";

const SignInForm: React.FC = () => {
  const signIn = useSignInStore(useShallow((state) => state.signIn));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({
          field: { onChange, onBlur, value },
          formState: {
            errors: { username: usernameError },
          },
        }) => (
          <Input
            space="$size.9"
            autoCapitalize="none"
            textContentType="username"
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            bg={usernameError ? "$red3" : "$red6"}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            secureTextEntry={true}
            //passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
            textContentType="password"
            placeholder="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Form.Trigger asChild>
        <Button theme="active">Submit</Button>
      </Form.Trigger>
    </Form>
  );
};

export default SignInForm;
