import { CheffsTable, HomeTitle } from "./components";

import { getCheffsData } from "../../utils";

import { Icon } from "../../ui/components";

import { S } from "./styles";

function HomePage(): JSX.Element {
  const cheffs = getCheffsData();

  return (
    <S.Container>
      <Icon name="logo" size="150px" fill="primary" />
      <HomeTitle />
      <CheffsTable cheffs={cheffs} />
    </S.Container>
  );
}

export { HomePage };
