import { useContext, useState } from "react";

import { UserContext } from "../../context";

import { useAsync } from "../../hooks";

import { services } from "../../services";

import { CheffsTable, HomeTitle } from "./components";

import { Icon } from "../../ui/components";

import { S } from "./styles";

function HomePage(): JSX.Element {
  const { token } = useContext(UserContext);
  const [needRetry, setNeedRetry] = useState(true);

  const { data: cheffs, loading } = useAsync({
    fn: async () => {
      if (!needRetry) return null;

      setNeedRetry(false);

      const [{ data: pendingCheffs }, { data: approvedCheffs }] =
        await Promise.all([
          services.cheffs.getPending({ token }),
          services.cheffs.getApproved({ token }),
        ]);

      return [...pendingCheffs, ...approvedCheffs];
    },
    deps: [needRetry],
  });

  return (
    <S.Container>
      <Icon name="logo" size="150px" fill="primary" />
      <HomeTitle />
      <CheffsTable
        cheffs={cheffs}
        loading={loading}
        setNeedRetry={setNeedRetry}
      />
    </S.Container>
  );
}

export { HomePage };
