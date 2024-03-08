import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { RowComponent } from '.';

interface Props{
    leftChildrent?:ReactNode;
    rightChildrent?:ReactNode;
    text?:string|undefined
}
const HeaderComponent = (props:Props) => {
    const{leftChildrent,rightChildrent,text}=props
  return (
    <RowComponent justify='space-between'>
        <TouchableOpacity>
            {leftChildrent}
        </TouchableOpacity>
        {text?(
            <View>
                <Text>{text}</Text>
            </View>
        ):(<View></View>)}
        {rightChildrent?(
            <TouchableOpacity>
                {rightChildrent}
            </TouchableOpacity>
        ):<View></View>}
    </RowComponent>
  )
}

export default HeaderComponent