import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useShallow } from "zustand/react/shallow";
import { View, Text } from "react-native";

import { Button, Form, Input } from "tamagui";
import useUserStore from "../auth.store";

type Inputs = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

const SignUpForm: React.FC = () => {
  const signUp = useUserStore(useShallow((state) => state.signUp));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(signUp)}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoCapitalize="none"
            textContentType="username"
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
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
            passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
            textContentType="password"
            placeholder="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            secureTextEntry={true}
            passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
            textContentType="password"
            placeholder="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="passwordConfirmation"
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Form.Trigger asChild>
        <Button theme="active">Submit</Button>
      </Form.Trigger>
    </Form>
  );
};

export default SignUpForm;
