import { Navigate, Outlet, useRouteLoaderData } from "react-router-dom";

import { LoadingVariants as Loading } from "../../ui/components";

import { Header } from "./components/Header";

import { S } from "./styles";

function NonAuthTemplate(): JSX.Element {
  const { user, redirect } = useRouteLoaderData("root") as {
    user?: any;
    redirect: string;
  };

  if (user) {
    Navigate({
      to: redirect,
    });

    return <Loading.Screen />;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
}

export { NonAuthTemplate };
