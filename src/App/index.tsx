import { Fragment } from "react";

import { Router } from "../Router";

import { GlobalStyle } from "../ui/styles/globalStyle";

function App(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  );
}

export { App };
