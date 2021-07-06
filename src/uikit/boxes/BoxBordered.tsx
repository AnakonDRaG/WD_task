import React, { ReactNode } from "react";

import { View, Text } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { theme } from "utils/themes";


interface BoxBorderedProps {
  children?: ReactNode,
  width?: string,
  height?: string,
  borderRadius?: string,
  borderColor?: string | string[],
  margin?: number
}

const BoxBordered: React.FC<BoxBorderedProps> = (props) => (
  <BoxContainer
    width={props.width}
    height={props.height}
    margin={props.margin}
  >
    <Gradient
      width={props.width}
      colors={props.borderColor || theme.gradients.gray}
      start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
      borderRadius={props.borderRadius}
    >
      <BoxContent
        borderRadius={props.borderRadius}
      >
        {props.children}
      </BoxContent>
    </Gradient>
  </BoxContainer>
);


const BoxContainer = styled.View`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin !== undefined ? margin + "px" : "0px"};
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const Gradient = styled(LinearGradient)`
  flex: 100%;
  padding: 1px;
  width: 100%;
  height: auto;
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
`;

const BoxContent = styled.View`
  flex: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
`;

export default BoxBordered;
