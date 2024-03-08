import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRoute from './src/navigator/AppRoute'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppRoute/>
      </NavigationContainer>
    </>
  )
}

export default App