import React from "react";

import styled from "styled-components/native";
import { useTheme } from "styled-components";
import { ViewProps } from "react-native";

interface BoxRoundedProps extends ViewProps{
  borderRadius?: string
}

const BoxRounded: React.FC<BoxRoundedProps> = (props) => {
  const theme = useTheme();

  return (
    <BoxRoundedContainer
      {...props}
      borderRadius={props.borderRadius && props.borderRadius || theme.sizes.borderRadius}
    >
      {props.children}
    </BoxRoundedContainer>
  );
};

const BoxRoundedContainer = styled.View`
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  overflow: hidden;
`;

export default BoxRounded;
