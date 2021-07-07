import React from 'react'
import styled from 'styled-components/native'
import { Heading1 } from 'uikit/Typography'

interface FormControlProps {
  label?: JSX.Element | string
}

export const FormControl: React.FC<FormControlProps> = props => (
  <FormControlContainer>
    {props.label && <Title>{props.label}</Title>}
    {props.children}
  </FormControlContainer>
)

const FormControlContainer = styled.View`
  margin: 0 0 20px 0;
`

const Title = styled(Heading1)`
  margin: 0 0 10px 0;
`
