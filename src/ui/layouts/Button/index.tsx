import { PropsWithChildren } from "react";

import { Loading } from "../../components";

import { toProps } from "../../../utils";

import { S } from "./styles";

interface ButtonProps extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingSize?: "small" | "medium" | "large";
}

function Button({
  children,
  type = "button",
  onClick = () => {},
  disabled = false,
  loading = false,
  loadingSize = "small",
}: ButtonProps): JSX.Element {
  return (
    <S.C.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      loading={toProps(loading)}
    >
      <Loading disabled={!loading} size={loadingSize}>
        {children}
      </Loading>
    </S.C.Button>
  );
}

export { Button };
