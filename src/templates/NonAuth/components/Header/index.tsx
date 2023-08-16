import { Icon } from "../../../../ui/components";

import { S } from "./styles";

function Header(): JSX.Element {
  return (
    <S.C.Header>
      <Icon name="logo" fill="primary" width="205px" height="146px" />
    </S.C.Header>
  );
}

export { Header };
