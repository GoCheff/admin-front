import styled from "styled-components";

import tw from "twin.macro";

interface ButtonProps {
  $loading?: boolean;
  $size?: "small" | "medium" | "large";
}

const Button = styled.button<ButtonProps>`
  ${tw`flex justify-center items-center bg-primary text-white p-4 rounded font-bold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 transition duration-200 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300`}
  ${({ $loading }) => $loading && tw`!bg-primary`}
  ${({ $size }) => {
    switch ($size) {
      case "small":
        return tw`text-xs rounded p-2 px-4`;
      case "medium":
        return tw`text-sm`;
      case "large":
        return tw`text-lg`;
    }
  }}
`;

const S = { C: { Button } };

export { S };
