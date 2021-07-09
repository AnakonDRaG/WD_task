import React from 'react'
import MenuButton from 'uikit/MenuButton'
import Container from 'uikit/Container'
import {
  CallingIcon,
  ChatIcon,
  CompanyNameLogo,
  DataSettingIcon,
  HandshakeIcon,
  OfficeWorkIcon,
  OrderConfirmedIcon,
  VideoTutorialIcon,
} from 'uikit/Icons'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigator = useNavigation()

  return (
    <Container>
      <HeaderContainer>
        <CompanyNameLogo />
      </HeaderContainer>

      <Columns>
        <Row style={{ marginRight: 10 }}>
          <MenuButton
            title="Заявка на ремонт"
            icon={DataSettingIcon}
            iconStyle={{ marginTop: 5, marginBottom: 20 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
          <MenuButton
            title="Чат з менеджером"
            icon={ChatIcon}
            iconStyle={{ marginTop: 12, marginBottom: 0 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
          <MenuButton
            title="Мій кабінет"
            icon={OfficeWorkIcon}
            iconStyle={{ marginTop: 14, marginBottom: 0 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
        </Row>
        <Row style={{ marginLeft: 10 }}>
          <MenuButton
            title="Відео-інструкції"
            icon={VideoTutorialIcon}
            iconStyle={{ marginTop: 8, marginBottom: 20 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
          <MenuButton
            title="Дзвінок у підтримку"
            icon={CallingIcon}
            iconStyle={{ marginTop: 17, marginBottom: 12 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
          <MenuButton
            title="Контакти"
            icon={HandshakeIcon}
            iconStyle={{ marginTop: 17, marginBottom: 10 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
          <MenuButton
            title="Продукція"
            icon={OrderConfirmedIcon}
            iconStyle={{ marginTop: 20, marginBottom: 8 }}
            onPress={() => navigator.navigate('ApplicationCreate')}
          />
        </Row>
      </Columns>
    </Container>
  )
}

const HeaderContainer = styled.View`
  margin: 15px 0 30px;
  align-items: center;
`

const Row = styled.View`
  flex: 1;
`

const Columns = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0 25px;
`


export default HomeScreen
