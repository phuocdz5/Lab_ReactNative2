import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import AppRoute from './src/navigator/AppRoute'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </>
  )
}

export default App