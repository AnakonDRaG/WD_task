import styled from 'styled-components/native'
import colors from 'utils/colors'
import { FontWeight } from 'utils/typography'

interface BaseTextProps {
  color: keyof typeof colors
  weight?: FontWeight
}

const WEIGHT_NAME_TO_VALUE: Record<FontWeight, string> = {
  regular: '400',
  semibold: '600',
  bold: '700',
}

const BaseText = styled.Text<BaseTextProps>`
  font-weight: ${({ weight }) => WEIGHT_NAME_TO_VALUE[weight || 'regular']};
  color: ${({ theme, color }) => colors[color] || theme.colors.black};
`

export const Heading1 = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.heading1};
  line-height: ${({ theme }) => theme.lineHeight.heading1};
`

export const Heading2 = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.heading2};
  line-height: ${({ theme }) => theme.lineHeight.heading2};
`

export const Heading3 = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.heading3};
  line-height: ${({ theme }) => theme.lineHeight.heading3};
`

export const Heading4 = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.heading4};
  line-height: ${({ theme }) => theme.lineHeight.heading4};
`

export const Description = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.description};
  line-height: ${({ theme }) => theme.lineHeight.description};
`

export const Paragraph = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  line-height: ${({ theme }) => theme.lineHeight.paragraph};
`

export const Details = styled(BaseText)`
  font-size: ${({ theme }) => theme.typeScale.details};
  line-height: ${({ theme }) => theme.lineHeight.details};
`

export const Text = styled(BaseText)``
