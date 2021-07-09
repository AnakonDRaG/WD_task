import React from 'react'
import CardComponent, { CardComponentProps } from "uikit/CardComponent";
import MasonryList from '@react-native-seoul/masonry-list'
import Container from 'uikit/Container'
import {
  CallingIcon,
  ChatIcon,
  CompanyNameLogo,
  DataSettingIcon, HandshakeIcon, OfficeWorkIcon, OrderConfirmedIcon,
  VideoTutorialIcon
} from "uikit/Icons";
import styled from 'styled-components/native'
import ServiceStaffScreen from 'screens/ApplicationCreate'
import VideoInstruction from 'screens/VideoInstruction'

interface ScreensProps extends CardComponentProps {
  component: any
}

const HomeScreen = () => (
  <Container>
    <HeaderLogo />
    <MasonryList
      data={HomeScreensDescription}
      numColumns={2}
      renderItem={props =>
        props.item && (
          <CardComponent
            key={props.i}
            icon={<props.item.icon />}
            title={props.item.title}
            namePage={props.item.namePage}
          />
        )
      }
    />
  </Container>
)

const HomeScreensDescription: Array<ScreensProps | undefined> = [
  {
    icon: DataSettingIcon,
    title: 'Заявка на ремонт',
    namePage: 'ApplicationCreate',
    component: ServiceStaffScreen,
  },
  {
    icon: VideoTutorialIcon,
    title: 'Відео-інструкції',
    namePage: 'videoInstruction',
    component: VideoInstruction,
  },
  {
    icon: ChatIcon,
    title: 'Чат з менеджером',
    namePage: 'videoInstruction',
    component: undefined,
  },
  {
    icon: CallingIcon,
    title: 'Дзвінок у підтримку',
    namePage: 'videoInstruction',
    component: undefined,
  },
  {
    icon: OfficeWorkIcon,
    title: 'Мій кабінет',
    namePage: 'videoInstruction',
    component: undefined,
  },
  {
    icon: HandshakeIcon,
    title: 'Контакти',
    namePage: 'videoInstruction',
    component: undefined,
  },
  undefined,
  {
    icon: OrderConfirmedIcon,
    title: 'Продукція',
    namePage: 'videoInstruction',
    component: undefined,
  },
]

const HeaderLogo = styled(CompanyNameLogo)`
  margin: 40px auto;
`

export default HomeScreen
