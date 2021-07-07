import React, { useRef } from 'react'
import { KeyboardType, Text } from "react-native";
import { FormControl } from 'uikit/Form/FormControl'
import { PrimaryButton } from 'uikit/Button'
import { Item } from 'react-native-picker-select'
import styled from 'styled-components/native'
import { Heading4 } from 'uikit/Typography'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { ArrowRightIcon } from 'uikit/Icons'
import { CustomInputProps } from 'uikit/Form/Input'

interface FormProps {
  onSubmit: Function
  items: Array<FormInputsProps>
}

export interface FormInputsProps {
  props: {
    required?: boolean
    label?: string
    placeholder?: string
    items?: Item[]
    name: string
    keyboardType?: KeyboardType
    multiline?: boolean
    textAlignVertical?: string
    validation?: any
  }
  inputComponent: CustomInputProps<any>
}

const CustomForm = (props: FormProps) => {
  const formRef: any = useRef(null)
  let formValidations = {}

  const handleOnSubmit = async data => {
    try {
      formRef.current.setErrors({})
      const validationSchema = Yup.object().shape(formValidations)
      await validationSchema.validate(data, {
        abortEarly: false,
      })

      props.onSubmit(data)
    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
      }
    }
  }
  return (
    <Form ref={formRef} onSubmit={handleOnSubmit}>
      {props.items.map((item, index) => {
        if (item.props?.validation)
          formValidations[item.props.name] = item.props.validation

        return (
          <FormControl
            key={index}
            label={
              <Text>
                {item?.props?.label}
                {item.props?.required && <Required> *</Required>}
              </Text>
            }
          >
            <item.inputComponent {...item.props} />
          </FormControl>
        )
      })}
      <FormControl>
        <PrimaryButton
          title="Відправити заявку"
          onPress={() => formRef.current.submitForm()}
          iconRight={ArrowRightIcon}
        />
      </FormControl>
    </Form>
  )
}

const Required = styled(Heading4)`
  padding: 4px;
  color: ${({ theme }) => theme.colors.danger};
`

export default CustomForm
