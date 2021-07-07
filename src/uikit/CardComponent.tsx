import React from 'react'
import styled from 'styled-components/native'
import { Animated, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BoxBordered from 'uikit/boxes/BoxBordered'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

export interface CardComponentProps {
  icon?: any
  title: string | any
  namePage: string
}

const CardComponent = (props: CardComponentProps) => {
  const navigation = useNavigation()

  return (
    <BoxBordered width="auto" borderRadius="15px" margin={8}>
      <CardContainer
        onPress={() => {
          navigation.navigate(props.namePage)
        }}
        activeOpacity={0.5}
        underlayColor="white"
      >
        <Icon>{props.icon}</Icon>
        <Title>{props.title}</Title>
      </CardContainer>
    </BoxBordered>
  )
}

const CardContainer = styled(AnimatedTouchable)`
  display: flex;
  margin: 14px auto;

  background-color: rgba(255, 255, 255, 0.5);
  width: 153px;
  line-height: 19px;
`

const Icon = styled.View`
  margin: auto auto;
`

const Title = styled.Text`
  margin: 8px auto 0 auto;
  padding: 0 8px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.link};
  font-weight: 700;
`

export default CardComponent
