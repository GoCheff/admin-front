import { RouteObject } from "react-router-dom";

import { env } from "../../data/env";

type parseRoutesDTO = {
  routes: RouteObject[];
};

function parseRoutes({ routes }: parseRoutesDTO): RouteObject[] {
  if (env.standard.MODE !== "production") {
    return routes;
  }

  return routes.map((route) => ({
    ...route,
    path: env.standard.BASE_URL + route.path,
  }));
}

export { parseRoutes };
