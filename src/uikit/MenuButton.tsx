import React from 'react'
import styled from 'styled-components/native'
import { Animated, TouchableOpacity } from 'react-native'
import BoxBordered from 'uikit/boxes/BoxBordered'
import { SvgProps } from 'react-native-svg'
import { Heading3 } from 'uikit/Typography'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

export interface CardComponentProps {
  icon: React.FC<SvgProps>
  iconStyle: any
  title: string
  onPress: Function
}

const MenuButton = (props: CardComponentProps) => (
  <MenuButtonContainer
    onPress={props.onPress}
    activeOpacity={0.5}
    underlayColor="white"
  >
    <BoxBordered width="auto" borderRadius="15px" margin={0}>
      <ContentContainer>
        <IconContainer>
          <props.icon style={props.iconStyle} />
        </IconContainer>
        <Title weight="bold">{props.title}</Title>
      </ContentContainer>
    </BoxBordered>
  </MenuButtonContainer>
)

const MenuButtonContainer = styled(AnimatedTouchable)`
  margin: 0 0 20px 0;
  line-height: 19px;
`

const ContentContainer = styled.View``

const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: auto auto;
`

const Title = styled(Heading3)`
  margin: 0 0 15px 0;
  padding: 0 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.link};
`

export default MenuButton
