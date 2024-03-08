import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { InputComponent, RowComponent, SectionComponent } from '../../components'
import COLORS from '../../assets/colors/Colors'
import { FONTFAMILY } from '../../../assets/fonts'

const initValue={
    text1:'',
    text2:'',
    text3:'',
    text4:'',

}
const Bai3_Lab1 = ({navigation}:any) => {
    const [values, setValues] = useState(initValue);
    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values }
        data[`${key}`] = value;
        setValues(data);
    }
  return (
    <View style={{marginTop:15}}>
        <SectionComponent>
            <InputComponent value={values.text1} placeholder='text1' onChange={val => handleChangeValue('text1',val)}/>
            <InputComponent value={values.text2} placeholder='text2' onChange={val => handleChangeValue('text2',val)}/>
            <InputComponent value={values.text3} placeholder='text3' onChange={val => handleChangeValue('text3',val)}/>
            <InputComponent value={values.text4} placeholder='text4' onChange={val => handleChangeValue('text4',val)}/>
        </SectionComponent>
        <SectionComponent>
            <RowComponent justify='center'>
                <TouchableOpacity onPress={()=>navigation.navigate('Lab1_Bai1')}>
                    <Text style={{color:COLORS.HEX_BLACK,fontSize:20,fontFamily:FONTFAMILY.poppins_bold}}>Bài 1</Text>
                </TouchableOpacity>
            </RowComponent>
        </SectionComponent>
    </View>
  )
}

export default Bai3_Lab1