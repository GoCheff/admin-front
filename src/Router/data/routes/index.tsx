import { RouteObject } from "react-router-dom";

import {
  AuthTemplate,
  BaseTemplate,
  NonAuthTemplate,
} from "../../../templates";

import { HomePage, LoginPage, SignupPage } from "../../../pages";

const routes = {
  home: "/",
  login: "/login",
  signup: "/cadastro",
};

const routesObject: RouteObject[] = [
  {
    id: "root",
    element: <BaseTemplate />,
    children: [
      {
        element: <NonAuthTemplate />,
        children: [
          {
            path: routes.login,
            element: <LoginPage />,
          },
          {
            path: routes.signup,
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
            path: routes.home,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export { routes, routesObject };
