import React from 'react'
import styled from 'styled-components/native'

const Container = styled.ScrollView`
  padding: ${({ theme }) =>
    theme.sizes.container.y + 'px ' + theme.sizes.container.x + 'px' || '0 0'};
`

export default Container
