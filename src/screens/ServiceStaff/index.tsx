import React from "react";

import { ScrollView } from "react-native";
import { Heading1 } from "uikit/Typography";
import Container from "uikit/Container";
import { Col, Row } from "uikit/Grid";
import { NounHistoryButton } from "uikit/Button";
import Form from "components/Form.component";
import { serviceStaffInputs } from "constants/Forms/serviceStaffInputs";



const ServiceStaffScreen = () => (
  <>
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

        <Form
          onSubmit={() => {
            console.log("submit");
          }}
          items={serviceStaffInputs}
        />
      </Container>
    </ScrollView></>
);

export default ServiceStaffScreen;
