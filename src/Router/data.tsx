import { RouteObject } from "react-router-dom";

import { parseRoutes } from "../utils";

const routes: RouteObject[] = parseRoutes({
  routes: [
    {
      path: "/",
      loader: async () => {
        await new Promise((resolve) => setTimeout(resolve, 20000));
        return null;
      },
      element: (
        <div>
          <h1>Home</h1>
        </div>
      ),
    },
  ],
});

export { routes };
