import 'styled-components'
import { DefaultTheme } from 'styled-components'
import colors from './colors'
import gradients from './gradient'

import { sizes } from './sizes'
import { lineHeight, typeScale } from './typography'

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: typeof sizes
    typeScale: typeof typeScale
    lineHeight: typeof lineHeight
    colors: typeof colors
    gradients: typeof gradients
  }
}

export const theme: DefaultTheme = {
  sizes,
  typeScale,
  lineHeight,
  colors,
  gradients,
}
