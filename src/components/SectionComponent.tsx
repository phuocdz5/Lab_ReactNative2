import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { gobalStyles } from '../styles/gobalStyles';

interface Props {
    styles?:StyleProp<ViewStyle>;
    children:ReactNode
}
const SectionComponent = (props:Props) => {
    const {styles,children}=props
    
  return (
    <View style={[gobalStyles.section,styles]}>
      {children}
    </View>
  )
}

export default SectionComponent