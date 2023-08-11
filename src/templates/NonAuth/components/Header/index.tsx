import { Icon } from "../../../../ui/components";

import { S } from "./styles";

function Header(): JSX.Element {
  return (
    <S.C.Header>
      <Icon name="logo" fill="primary" width="205px" height="146px" />
      <S.C.Nav>
        <S.C.Ul>
          <li>
            <S.C.Link to="/login" end>
              Entrar
            </S.C.Link>
          </li>
          <li>
            <S.C.Link to="/cadastro" end>
              Cadastrar
            </S.C.Link>
          </li>
        </S.C.Ul>
      </S.C.Nav>
    </S.C.Header>
  );
}

export { Header };
