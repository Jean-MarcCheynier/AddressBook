import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormStateReturn,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Input as TamaguiInput,
  InputProps as TamaguiInputProps,
  Text,
} from 'tamagui';

type RenderInputProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
};

type AuthInputProps = RenderInputProps<any, any> &
  TamaguiInputProps & { formName: string };

export const AuthInput: React.FC<AuthInputProps> = ({
  field,
  formState,
  formName,
  ...rest
}) => {
  const [t] = useTranslation();
  const error = formState.errors[field.name];
  return (
    <>
      <TamaguiInput
        {...rest}
        placeholderTextColor={error && '$red10'}
        borderColor={error && '$red7'}
        backgroundColor={error && '$red2'}
        placeholder={t(`${formName}.${field.name}.placeholder`)}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={field.value}
      />
      {error && (
        <Text color="$red10">
          {t(`${formName}.${field.name}.error.${error?.message}`)}
        </Text>
      )}
    </>
  );
};
