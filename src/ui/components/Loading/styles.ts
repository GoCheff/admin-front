import styled from "styled-components";

import tw from "twin.macro";

interface SpinnerProps {
  size: "small" | "medium" | "large";
}

const Spinner = styled.div<SpinnerProps>`
  ${tw`border-2 border-quaternary border-solid border-t-quaternary-200 rounded-full animate-spin`}

  ${({ size }) => {
    switch (size) {
      case "small":
        return tw`w-4 h-4`;
      case "medium":
        return tw`w-7 h-7`;
      case "large":
        return tw`w-9 h-9`;
    }
  }}
`;

const S = {
  Spinner,
};

export { S };
