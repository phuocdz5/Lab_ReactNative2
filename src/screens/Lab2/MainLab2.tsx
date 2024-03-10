import { View, Text } from 'react-native'
import React from 'react'
import { ContainerComponent } from '../../components'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const MainLab2 = () => {
  return (
    <ContainerComponent>
      <Header />
      <Body />
      <Footer />
    </ContainerComponent>
  )
}

export default MainLab2