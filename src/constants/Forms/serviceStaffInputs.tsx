import React from 'react'
import { serviceStaffItems } from 'constants/serviceStaffItems'
import { FormInputsProps } from 'components/CustomForm'
import * as Yup from 'yup'
import { RegexUAPhoneNumber } from 'constants/constans'
import { ImageGalleryPicker } from 'uikit/Form/ImageGalleryPicker'
import { Input } from 'uikit/Form/Input'
import { InputItemPicker } from 'uikit/Form/InputItemPicker'
import { TextArea } from 'uikit/Form/TextArea'

export const serviceStaffInputs: Array<FormInputsProps> = [
  {
    props: {
      label: 'Номер телефону',
      placeholder: '+380',
      keyboardType: 'phone-pad',
      name: 'numberPhone',
      required: true,
      validation: Yup.string()
        .matches(RegexUAPhoneNumber, 'Некоректний номер телефону')
        .required('Номер телефону обов`яковий для заповнення'),
    },
    inputComponent: Input,
  },
  {
    props: {
      label: 'Email',
      placeholder: 'privet@gmail.com',
      keyboardType: 'email-address',
      name: 'email',
      required: true,
      validation: Yup.string()
        .email('Не коректна електронна адреса')
        .required('Номер телефону обов`яковий для заповнення'),
    },
    inputComponent: Input,
  },
  {
    props: {
      label: 'Оберіть апарат/інструмент',
      placeholder: 'Список інструментів',
      required: true,
      name: 'toolPick',
      items: serviceStaffItems,
      validation: Yup.string().required('Оберіть апарат/інструмент'),
    },
    inputComponent: InputItemPicker,
  },
  {
    props: {
      label: 'Серійний номер',
      placeholder: 'При бажанні додати додаткову інформацію',
      name: 'serialNumber',
    },
    inputComponent: Input,
  },
  {
    props: {
      label: 'Коментар',
      placeholder: 'При бажанні додати додаткову інформацію',
      name: 'comment',
      multiline: true,
      textAlignVertical: 'top',
    },
    inputComponent: TextArea,
  },
  {
    props: {
      name: 'images',
      validation: Yup.array().max(10, 'Не більше 10 зображень'),
    },
    inputComponent: ImageGalleryPicker,
  },
]
