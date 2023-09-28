import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native";

import { Button, ButtonText, Form, Input } from "tamagui";

type Inputs = {
  username: string;
  password: string;
};

const SignInForm: React.FC = () => {
  const onSubmit = (data) => console.log(data);

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
    <View>
      <View style={{ height: 200 }}></View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
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
          minLength: 8,

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

      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default SignInForm;
