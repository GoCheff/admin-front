import { createGlobalStyle } from "styled-components";

import tw from "twin.macro";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    ${tw`outline-none`};
  }

  html {
    ${tw`h-full`};
  }

  body, #root {
    ${tw`min-h-screen m-0 p-0 font-jost bg leading-5`};
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: inherit;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    ${tw`text-inherit`};
  }
`;

export { GlobalStyle };
