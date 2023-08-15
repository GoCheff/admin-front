import { PropsWithChildren, useState } from "react";

import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

import { S } from "./styles";

interface InputProps extends PropsWithChildren {
  register: UseFormRegisterReturn<string>;
  value: string;
  label?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  showErrors?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  customError?: string;
  disabled?: boolean;
  loading?: boolean;
}

function Input({
  register,
  value,
  label = "",
  type = "text",
  minLength,
  maxLength,
  showErrors = true,
  error,
  customError,
  disabled = false,
}: InputProps): JSX.Element {
  const [focus, setFocus] = useState(false);

  const hasError = !!error || !!customError;

  const errorTypes = {
    required: "Este campo é obrigatório",
    pattern: "Formato inválido",
    minLength: minLength
      ? `Mínimo de ${minLength} caracteres necessários`
      : "Mínimo de caracteres necessários não atingido",
    maxLength: maxLength
      ? `Máximo de ${maxLength} caracteres permitidos`
      : "Máximo de caracteres permitidos atingido",
  };

  const errorType = error?.type as keyof typeof errorTypes;

  return (
    <div>
      <S.C.Label $focus={focus} $filled={value} $error={hasError}>
        {label && (
          <S.LabelText onClick={() => !disabled && setFocus(true)}>
            {label}
          </S.LabelText>
        )}
        <S.C.Input
          type={type}
          {...register}
          onFocus={() => !disabled && setFocus(true)}
          onBlur={() => !disabled && setFocus(false)}
          disabled={disabled}
        />
        {showErrors && (
          <S.Error>{customError || errorTypes[errorType] || ""}</S.Error>
        )}
      </S.C.Label>
    </div>
  );
}

export { Input };
