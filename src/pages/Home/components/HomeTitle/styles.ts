import styled from "styled-components";

import tw from "twin.macro";

const Title = styled.h1`
  ${tw`text-xl font-bold text-center mb-4 flex justify-center items-end`}
`;

const TitleFocus = styled.span`
  ${tw`ml-1 text-sm bg-primary text-white px-2 py-1 rounded-md uppercase`}
`;

const S = { C: { Title }, TitleFocus };

export { S };
