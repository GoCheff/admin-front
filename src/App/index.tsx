import { Fragment } from "react";

import { Router } from "../Router";

import { GlobalContextProvider, UserContextProvider } from "../context";

import { GlobalStyle } from "../ui/styles";

function App(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalContextProvider providers={[UserContextProvider]}>
        <Router />
      </GlobalContextProvider>
    </Fragment>
  );
}

export { App };
