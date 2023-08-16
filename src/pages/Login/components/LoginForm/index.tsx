import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { Button, Form, Input } from "../../../../ui/layouts";

import { Spacer } from "../../../../ui/components";

import { wait } from "../../../../utils";
import { useContext } from "react";
import { UserContext } from "../../../../context";

interface LoginFormProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
}

function LoginForm({
  register,
  watch,
  handleSubmit,
  errors,
  isSubmitting,
}: LoginFormProps): JSX.Element {
  const { login } = useContext(UserContext);

  async function onSubmit(data: FieldValues) {
    await wait({ time: 3000 });

    console.log({ data });
    login({ token: "token" });
  }

  function getButtonDisabled() {
    return !!(
      !watch("email") ||
      !watch("password") ||
      Object.keys(errors).length ||
      isSubmitting
    );
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)} submitDisabled={isSubmitting}>
      <Input
        register={register("email", {
          required: true,
          pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        })}
        value={watch("email")}
        label="Email"
        error={errors.email}
        disabled={isSubmitting}
      />
      <Input
        register={register("password", {
          required: true,
        })}
        value={watch("password")}
        label="Senha"
        type="password"
        error={errors.password}
        disabled={isSubmitting}
      />
      <Spacer size={3} />
      <Button
        type="submit"
        disabled={getButtonDisabled()}
        loading={isSubmitting}
      >
        Entrar
      </Button>
    </Form>
  );
}

export { LoginForm };
