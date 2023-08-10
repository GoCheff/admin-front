import { Navigate, Outlet, useLoaderData } from "react-router-dom";

import { LoadingVariants as Loading } from "../../ui/components/Loading";

function NonAuthTemplate(): JSX.Element {
  const servedUser = useLoaderData() as {
    user: any;
    redirect: string;
  } | null;

  if (servedUser) {
    Navigate({
      to: servedUser.redirect,
    });

    return <Loading.Screen />;
  }

  return <Outlet />;
}

export { NonAuthTemplate };
