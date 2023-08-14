import { useForm } from "react-hook-form";

import { Form, Input } from "../../ui/layouts";

function LoginPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    console.log({ data });
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("email", {
          required: true,
          pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        })}
        value={watch("email")}
        label="Email"
        error={errors.email}
      />
      <Input
        register={register("password", {
          required: true,
        })}
        value={watch("password")}
        label="Senha"
        type="password"
        error={errors.password}
      />
    </Form>
  );
}

export { LoginPage };
