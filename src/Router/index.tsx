import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { env } from "../data";

import { routesObject } from "./data";

function Router(): JSX.Element {
  const browserRouter = createBrowserRouter(routesObject, {
    basename: env.standard.BASE_URL,
  });

  return <RouterProvider router={browserRouter} />;
}

export { Router };
