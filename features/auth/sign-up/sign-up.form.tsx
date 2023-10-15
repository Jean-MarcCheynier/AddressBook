import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Text } from "react-native";
import { Button, Form, Input } from "tamagui";

import { SignUpPayload } from "./sign-up.fetch";
import useSignUpStore from "./sign-up.store";

const SignUpForm: React.FC = () => {
  const { push } = useRouter();
  const [signUp, success] = useSignUpStore((state) => [
    state.signUp,
    state.success,
  ]);
  useEffect(() => {
    if (success) {
      push("/sign-in");
    }
  }, [success, push]);

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
            placeholder={`First name ${errors.username ? "is required" : ""}`}
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
