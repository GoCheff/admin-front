import { PropsWithChildren } from "react";

interface InputProps extends PropsWithChildren {
  register: any;
  label?: string;
  type?: string;
  error?: string;
}

function Input({ register, label = "", type, error }: InputProps): JSX.Element {
  return (
    <div>
      <label>
        {label && <span>{label}</span>}
        <input type={type} {...register} />
        {error && <span>{error}</span>}
      </label>
    </div>
  );
}

export { Input };
