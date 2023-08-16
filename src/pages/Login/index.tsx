import { useForm } from "react-hook-form";

import { LoginForm } from "./components/LoginForm";

function LoginPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <LoginForm
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
    />
  );
}

export { LoginPage };
