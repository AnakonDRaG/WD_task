import React from 'react'
import { TouchableOpacity } from 'react-native'
import BoxBordered from 'uikit/boxes/BoxBordered'
import { BackArrowItem } from 'uikit/Icons'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <BackButtonComponent onPress={() => navigation.goBack()}>
      <BoxBordered
        height="37px"
        width="37px"
        borderRadius="10px"
        borderColor={theme.gradients.orange}
        gradientAngle={180}
      >
        <BackArrowItem />
      </BoxBordered>
    </BackButtonComponent>
  )
}

const BackButtonComponent = styled(TouchableOpacity)`
  margin: 0 0 0 ${({ theme }) => theme.sizes.container.x}px;
}

;
`

export default BackButton
