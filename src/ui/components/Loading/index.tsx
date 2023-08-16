import { Fragment, PropsWithChildren } from "react";

import { Screen } from "./components/Screen";

import { S } from "./styles";

interface LoadingProps extends PropsWithChildren {
  disabled?: boolean;
  type?: "Screen";
  size?: "small" | "medium" | "large";
}

function Loading({
  children,
  disabled,
  type,
  size = "medium",
}: LoadingProps): JSX.Element {
  if (type === "Screen") {
    return (
      <Screen>
        <Loading disabled={disabled} size={size}>
          {children}
        </Loading>
      </Screen>
    );
  }

  return <Fragment>{disabled ? children : <S.Spinner size={size} />}</Fragment>;
}

const LoadingVariants = {
  Screen: (props: Omit<LoadingProps, "type">) => (
    <Loading {...props} type="Screen" />
  ),
};

export { Loading, LoadingVariants };
