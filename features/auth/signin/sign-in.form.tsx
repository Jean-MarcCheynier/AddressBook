import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native";

import { Button, ButtonText, Form, Input } from "tamagui";
import { SignInPayload } from "../auth.store";

type Inputs = {
  username: string;
  password: string;
};

const SignInForm: React.FC<{
  onSubmit: (payload: SignInPayload) => void;
}> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <View style={{ height: 200 }}></View>
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
        <Button>Submit</Button>
      </Form.Trigger>
    </Form>
  );
};

export default SignInForm;
