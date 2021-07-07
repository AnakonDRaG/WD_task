import React from "react";
import styled from "styled-components/native";

export const Flex = styled.View`
  display: flex;
  flex: auto;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
`;


export const Row = styled(Flex)`
  width: 100%;
  ${({style}) => style}
`;

export const Col = styled.View`
  flex: auto;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: ${({ size }) => size || "auto"};

`;


