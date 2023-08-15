import { RouteObject } from "react-router-dom";

import { AuthTemplate, NonAuthTemplate } from "../templates";

import { HomePage, LoginPage, SignupPage } from "../pages";

import { getAuthData, getCheffsData } from "../utils";

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
            id: "data",
            loader: async () => {
              const cheffs = await getCheffsData();

              return {
                cheffs,
              };
            },
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export { routes };
