import { FieldValues, useForm } from "react-hook-form";

import { Spacer } from "../../ui/components";

import { Button, Form, Input } from "../../ui/layouts";

import { wait } from "../../utils";

function LoginPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data: FieldValues) {
    await wait({ time: 3000 });

    console.log({ data });
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

export { LoginPage };
