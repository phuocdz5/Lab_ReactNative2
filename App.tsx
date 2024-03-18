import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Lab1Navigator, Lab2Navigator, Lab3Navigator, Lab4Navigator } from './src/navigator'
import { View } from 'react-native'

const App = () => {
  return (

    <NavigationContainer>
      {/* <Lab1Navigator/> */}
      {/* <Lab2Navigator/> */}
      {/* <Lab3Navigator /> */}
      <Lab4Navigator/>
    </NavigationContainer>
  )
}

export default App