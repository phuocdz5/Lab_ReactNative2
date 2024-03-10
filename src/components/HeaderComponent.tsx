import React, { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RowComponent } from '.';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import TextComponent from './TextComponent';

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
        {text&&(
            <View style={{flex:1,alignItems:'center'}}>
                <TextComponent color={COLORS.HEX_BLACK} text={text} font={FONTFAMILY.poppins_bold} />
            </View>
        )}
        {rightChildrent?(
            <TouchableOpacity>
                {rightChildrent}
            </TouchableOpacity>
        ):<View style={{flex:0.1}}></View>}
    </RowComponent>
  )
}

export default HeaderComponent