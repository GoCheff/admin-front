import { RouteObject } from "react-router-dom";

import { AuthTemplate, NonAuthTemplate } from "../templates";

import { getAuthData } from "../utils";

const routes: RouteObject[] = [
  {
    id: "non-auth",
    loader: async () => {
      const user = await getAuthData();

      if (!user) {
        return null;
      }

      return {
        user,
        redirect: "/",
      };
    },
    element: <NonAuthTemplate />,
    children: [
      {
        path: "/login",
        element: <div>Login</div>,
      },
    ],
  },
  {
    id: "auth",
    loader: async () => {
      const user = await getAuthData();

      if (user) {
        return {
          user,
        };
      }

      return {
        user: null,
        redirect: "/login",
      };
    },
    element: <AuthTemplate />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
];

export { routes };
