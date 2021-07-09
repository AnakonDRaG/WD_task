import { StackNavigationProp } from '@react-navigation/stack'

export type RootParamList = {
  Home: undefined
  ApplicationCreate: undefined
}

export type HomeNavigationProps = StackNavigationProp<RootParamList, 'Home'>
export type ApplicationCreateProps = StackNavigationProp<
  RootParamList,
  'ApplicationCreate'
>
