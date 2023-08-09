import styled from "styled-components";

interface IconContainerProps {
  fill?: string;
}

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = {
  IconContainer,
};

export { S };
