import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useShallow } from "zustand/react/shallow";
import { Text } from "react-native";

import { Button, Form, Input, useTheme } from "tamagui";
import useUserStore from "../auth.store";
import { SignUpPayload } from "./sign-up.fetch";

const SignUpForm: React.FC = () => {
  const signUp = useUserStore(useShallow((state) => state.signUp));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpPayload>({
    defaultValues: {
      username: "",
      password: "",
      passwordRepeat: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(signUp)}>
      <Controller
        control={control}
        rules={{
          required: "This is required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholderTextColor={errors.username && "$red10"}
            borderColor={errors.username && "$red7"}
            backgroundColor={errors.username && "$red2"}
            autoCapitalize="none"
            textContentType="username"
            placeholder={`First name ${!!errors.username ? "is required" : ""}`}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
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
        name="passwordRepeat"
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Form.Trigger asChild>
        <Button theme="active">Submit</Button>
      </Form.Trigger>
    </Form>
  );
};

export default SignUpForm;
