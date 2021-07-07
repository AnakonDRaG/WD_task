import React from 'react'

import { Alert, ScrollView } from 'react-native'
import { Heading1 } from 'uikit/Typography'
import Container from 'uikit/Container'
import { Col, Row } from 'uikit/Grid'
import { NounHistoryButton } from 'uikit/Button'
import CustomForm from 'components/CustomForm'
import { serviceStaffInputs } from 'constants/Forms/serviceStaffInputs'

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
      <Row style={`margin: 0 0 8px 0`}>
        <Col size="100%" justifyContent="center">
          <Heading1 weight="bold">Вводні дані</Heading1>
        </Col>
        <Col>
          <NounHistoryButton />
        </Col>
      </Row>

      <CustomForm onSubmit={onSubmit} items={serviceStaffInputs} />
    </Container>
  </ScrollView>
)

export default ServiceStaffScreen
