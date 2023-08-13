import { PropsWithChildren } from "react";

interface FormProps extends PropsWithChildren {
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

function Form({ children, handleSubmit }: FormProps): JSX.Element {
  return <form onSubmit={handleSubmit}>{children}</form>;
}

export { Form };
