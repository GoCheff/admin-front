import { Navigate, Outlet, useRouteLoaderData } from "react-router-dom";

import { LoadingVariants as Loading } from "../../ui/components";

function AuthTemplate(): JSX.Element {
  const { user, redirect } = useRouteLoaderData("root") as {
    user?: any;
    redirect: string;
  };

  if (!user) {
    Navigate({
      to: redirect,
    });

    return <Loading.Screen />;
  }

  return <Outlet />;
}

export { AuthTemplate };
