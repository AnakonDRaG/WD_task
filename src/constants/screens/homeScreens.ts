import {
  CallingIcon,
  ChatIcon,
  DataSettingIcon,
  HandshakeIcon,
  OfficeWorkIcon,
  OrderConfirmedIcon,
  VideoTutorialIcon,
} from 'uikit/Icons'
import { CardComponentProps } from 'uikit/CardComponent'
import VideoInstruction from 'screens/VideoInstruction/index'
import ServiceStaffScreen from 'screens/ServiceStaff'

export interface ScreensProps extends CardComponentProps {
  component: any
}

export const HomeScreensDescription: Array<ScreensProps | undefined> = [
  {
    icon: DataSettingIcon,
    title: 'Заявка на ремонт',
    namePage: 'serviceStaff',
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
