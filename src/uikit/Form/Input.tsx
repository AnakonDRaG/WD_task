import { TextInput, TextInputProps, View } from 'react-native'
import React, { Ref, useCallback, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import { useField } from '@unform/core'
import { Details } from 'uikit/Typography'
import BoxBordered from 'uikit/boxes/BoxBordered'
import styled from 'styled-components/native'

export type CustomInputProps<T extends {}> = T & {
  onValueChange?: Function
  ref?: Ref<any>
  name: string
}

export const Input = (props: CustomInputProps<TextInputProps>) => {
  const theme = useTheme()
  const inputRef: any = useRef(null)

  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(props.name)

  useEffect(() => {
    inputRef.current.value = defaultValue
  }, [defaultValue])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) {
          return inputRef.current.value
        }
        return ''
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value })
          inputRef.current.value = value
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' })
          inputRef.current.value = ''
        }
      },
    })
  }, [fieldName, registerField])

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) {
        inputRef.current.value = text
      }

      if (props.onValueChange) props.onValueChange(text)
    },
    [props.onValueChange],
  )

  return (
    <View>
      {error && <Details color="danger">{error}</Details>}
      <BoxBordered
        width="100%"
        borderRadius={theme.sizes.borderRadius}
        borderColor={error && theme.gradients.danger}
      >
        <InputComponent
          {...props}
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          onFocus={clearError}
        />
      </BoxBordered>
    </View>
  )
}

export const InputComponent = styled(TextInput)`
  padding: 14px 15px;
  width: 100%;
  align-items: flex-start;
`
