import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { S } from "./styles";

interface FormProps extends PropsWithChildren {
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

function Form({ children, handleSubmit }: FormProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormOrChildFocused, setIsFormOrChildFocused] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [isFormOrChildFocused, handleSubmit]);

  function handleFocusChange() {
    if (!formRef.current) return;

    setIsFormOrChildFocused(formRef.current.contains(document.activeElement));
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (!(e.key === "Enter" && isFormOrChildFocused)) {
      return;
    }

    handleSubmit();
  }

  return (
    <S.C.Form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocus={handleFocusChange}
      onBlur={handleFocusChange}
    >
      {children}
    </S.C.Form>
  );
}

export { Form };
