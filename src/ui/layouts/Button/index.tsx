import { PropsWithChildren } from "react";

import { Loading } from "../../components";

import { S } from "./styles";

interface ButtonProps extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingSize?: "small" | "medium" | "large";
  size?: "small" | "medium" | "large";
  theme?: "success" | "danger" | "warning" | "info";
}

function Button({
  children,
  type = "button",
  onClick = () => {},
  disabled = false,
  loading = false,
  loadingSize = "small",
  size = "medium",
  theme,
}: ButtonProps): JSX.Element {
  return (
    <S.C.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      $loading={loading}
      $size={size}
      $theme={theme}
    >
      <Loading disabled={!loading} size={loadingSize}>
        {children}
      </Loading>
    </S.C.Button>
  );
}

export { Button };
