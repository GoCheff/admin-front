import { Fragment } from "react";

import { Router } from "../Router";

import { GlobalContextProvider, UserContextProvider } from "../context";

import { ToastWrapper } from "../libs";

import { GlobalStyle } from "../ui/styles";

import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyle />
      {ToastWrapper}
      <GlobalContextProvider providers={[UserContextProvider]}>
        <Router />
      </GlobalContextProvider>
    </Fragment>
  );
}

export { App };
