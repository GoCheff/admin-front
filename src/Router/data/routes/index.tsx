import { RouteObject } from "react-router-dom";

import {
  AuthTemplate,
  BaseTemplate,
  NonAuthTemplate,
} from "../../../templates";

import { HomePage, LoginPage } from "../../../pages";

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
        ],
      },
      {
        element: <AuthTemplate />,
        children: [
          {
            path: routes.home,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export { routes, routesObject };
