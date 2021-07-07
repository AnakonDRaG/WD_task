import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/themes'
import RootRouter from 'screens'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <RootRouter />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
