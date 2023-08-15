import styled from "styled-components";

import tw from "twin.macro";

const LabelText = styled.span`
  ${tw`text-sm font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-text`}
`;

const Input = styled.input`
  ${tw`py-2 font-semibold border-b border-black focus:outline-none focus:border-primary rounded-sm transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-auto`}
`;

interface LabelProps {
  $focus: boolean;
  $filled: string;
  $error: boolean;
}

const Label = styled.label<LabelProps>`
  ${tw`flex flex-col`}
  ${LabelText} {
    ${({ $focus, $filled }) =>
      $focus || $filled ? tw`translate-y-0` : tw`translate-y-6`}
    ${({ $focus }) => $focus && tw`text-primary`}
    ${({ $error }) => $error && tw`text-red-500`}
  }

  ${Input} {
    ${({ $focus }) => ($focus ? tw`border-primary` : tw`border-black`)}
    ${({ $error }) => $error && tw`border-red-500`}
  }
`;

const Error = styled.span`
  ${tw`text-xs font-semibold text-red-500 mt-1 h-5`}
`;

const S = {
  C: { Label, Input },
  LabelText,
  Error,
};

export { S };
