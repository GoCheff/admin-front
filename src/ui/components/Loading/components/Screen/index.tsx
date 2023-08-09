import { PropsWithChildren } from "react";

import { Icon } from "../../../Icon";

import { S } from "./styles";

interface ScreenProps extends PropsWithChildren {}

function Screen({ children }: ScreenProps): JSX.Element {
  return (
    <S.BackgroundLogo>
      <S.LoadingContainer>
        <Icon name="logo" fill="primary" width="171px" height="122px" />
        {children}
      </S.LoadingContainer>
    </S.BackgroundLogo>
  );
}

export { Screen };
