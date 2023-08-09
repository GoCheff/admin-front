import { PropsWithChildren } from "react";

import { Screen } from "./components/Screen";

import { S } from "./styles";

interface LoadingProps extends PropsWithChildren {
  disabled?: boolean;
  type?: "Screen";
}

function Loading({ children, disabled, type }: LoadingProps): JSX.Element {
  if (type === "Screen") {
    return (
      <Screen>
        <Loading disabled={disabled}>{children}</Loading>
      </Screen>
    );
  }

  return <S.Spinner>{disabled && children}</S.Spinner>;
}

const LoadingVariants = {
  Screen: Loading.bind(null, { type: "Screen" }),
};

export { Loading, LoadingVariants };
