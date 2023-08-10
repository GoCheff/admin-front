import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoadingVariants as Loading } from "../ui/components/Loading";

import { env } from "../data/env";

import { routes } from "./data";

function Router(): JSX.Element {
  const browserRouter = createBrowserRouter(routes, {
    basename: env.standard.BASE_URL,
  });

  return (
    <RouterProvider
      router={browserRouter}
      fallbackElement={<Loading.Screen />}
    />
  );
}

export { Router };
