import { useContext } from "react";

import { Navigate, Outlet, useLoaderData } from "react-router-dom";

import { UserContext } from "../../context";

import { routes } from "../../Router/data";

import { LoadingVariants as Loading } from "../../ui/components";

function AuthTemplate(): JSX.Element {
  const { user } = useContext(UserContext);
  const { needAuth } = useLoaderData() as { needAuth: boolean };

  if (!user && needAuth) {
    Navigate({
      to: routes.login,
    });

    return <Loading.Screen />;
  }

  return <Outlet />;
}

export { AuthTemplate };
