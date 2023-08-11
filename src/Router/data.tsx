import { RouteObject } from "react-router-dom";

import { AuthTemplate, NonAuthTemplate } from "../templates";

import { getAuthData } from "../utils";
import { LoginPage, SignupPage } from "../pages";

const routes: RouteObject[] = [
  {
    id: "root",
    loader: async () => {
      const user = await getAuthData();

      if (!user) {
        return {
          redirect: "/login",
        };
      }

      return {
        user,
        redirect: "/",
      };
    },
    children: [
      {
        element: <NonAuthTemplate />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <NonAuthTemplate />,
        children: [
          {
            path: "/cadastro",
            element: <SignupPage />,
          },
        ],
      },
      {
        element: <AuthTemplate />,
        loader: () => {
          return {
            needAuth: true,
          };
        },
        children: [
          {
            path: "/",
            element: <div>Home</div>,
          },
        ],
      },
    ],
  },
];

export { routes };
