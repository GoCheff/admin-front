import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoadingVariants as Loading } from "../ui/components/Loading";

import { routes } from "./data";

function Router(): JSX.Element {
  const browserRouter = createBrowserRouter(routes);

  return (
    <RouterProvider
      router={browserRouter}
      fallbackElement={<Loading.Screen />}
    />
  );
}

export { Router };
