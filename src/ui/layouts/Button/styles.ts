import styled from "styled-components";

import tw from "twin.macro";

interface ButtonProps {
  $loading?: boolean;
  $size?: "small" | "medium" | "large";
  $theme?: "success" | "danger" | "warning" | "info";
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

  ${({ $theme }) => {
    switch ($theme) {
      case "success":
        return tw`bg-green-500 hover:bg-green-600 focus:ring-green-600 disabled:bg-green-300`;
      case "danger":
        return tw`bg-red-500 hover:bg-red-600 focus:ring-red-600 disabled:bg-red-300`;
      case "warning":
        return tw`bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-600 disabled:bg-yellow-300`;
      case "info":
        return tw`bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 disabled:bg-blue-300`;
    }
  }}
`;

const S = { C: { Button } };

export { S };
