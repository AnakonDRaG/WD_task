import React from 'react'
import { Alert, ScrollView } from 'react-native'
import { Heading1 } from 'uikit/Typography'
import Container from 'uikit/Container'
import { NounHistoryButton } from 'uikit/Button'
import CustomForm from 'components/CustomForm'
import { serviceStaffInputs } from 'constants/Forms/serviceStaffInputs'
import styled from 'styled-components/native'

const onSubmit = data => {
  Alert.alert('Success!', JSON.stringify(data).toString(), [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ])

  console.log(data)
}

const ServiceStaffScreen = () => (
  <ScrollView>
    <Container>
      <HeaderContainer>
        <Heading1 weight="bold">Вводні дані</Heading1>
        <NounHistoryButton />
      </HeaderContainer>
      <CustomForm onSubmit={onSubmit} items={serviceStaffInputs} />
    </Container>
  </ScrollView>
)

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 8px 0;
`

export default ServiceStaffScreen
