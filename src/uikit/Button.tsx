import React, { ReactNode } from "react";

import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import styled from "styled-components/native";
import BoxBordered from "./boxes/BoxBordered";
import { NounHistoryIcon } from "./Icons";
import { SvgProps } from "react-native-svg";
import { Text } from "uikit/Typography";

interface CustomButtonProps {
  iconLeft?: React.FC<SvgProps>,
  iconRight?: React.FC<SvgProps>,
  title: any,
  onPress: (e: Event) => void
}

export const PrimaryButton = (props: CustomButtonProps) => (
  <PrimaryButtonContainer onPress={props.onPress}>
    {props.iconLeft && (<IconLeft>{React.createElement(props.iconLeft)}</IconLeft>)}
    <Text color="white">{props.title}</Text>
    {props.iconRight && (<IconRight>{React.createElement(props.iconRight)}</IconRight>)}
  </PrimaryButtonContainer>
);

export const NounHistoryButton = (props: TouchableOpacityProps) => (
  <BoxBordered width="37px" height="37px" borderRadius='10px'>
    <ButtonContainer {...props}>
      <NounHistoryIcon />
    </ButtonContainer>
  </BoxBordered>
);

const ButtonContainer = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: transparent;
  align-self: center;
`;

const PrimaryButtonContainer = styled(ButtonContainer)`
  padding: 12px 45px;
  background: ${({ theme }) => theme.colors.primary};
`;


const IconLeft = styled.View`
  margin: 0 12px 0 0
`;

const IconRight = styled.View`
  margin: 0 0 0 12px
`;



