import { Navigate, Outlet, useLoaderData } from "react-router-dom";

import { LoadingVariants as Loading } from "../../ui/components/Loading";

function AuthTemplate(): JSX.Element {
  const servedUser = useLoaderData() as {
    user: any;
    redirect?: string;
  };

  if (servedUser && servedUser.redirect) {
    Navigate({
      to: servedUser.redirect,
    });

    return <Loading.Screen />;
  }

  return <Outlet />;
}

export { AuthTemplate };
