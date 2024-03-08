import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeaderComponent, RowComponent, SectionComponent } from '../../components'
import { ArrowLeft2, User } from 'iconsax-react-native'
import COLORS from '../../assets/colors/Colors'
import { FONTFAMILY } from '../../../assets/fonts'

const Bai1 = ({navigation}:any) => {
  return (
    <View>
        <SectionComponent>
            <HeaderComponent 
                leftChildrent={<ArrowLeft2 size="32" color="#FF8A65"/>}
                text='Header'
                rightChildrent={<User size="32" color="#FF8A65"/>}/>
            <HeaderComponent 
                leftChildrent={<ArrowLeft2 size="32" color="#FF8A65"/>}
                text='Trang chủ'/>
            <HeaderComponent 
                leftChildrent={<ArrowLeft2 size="32" color="#FF8A65"/>}/>
        </SectionComponent>
        <SectionComponent>
            <RowComponent justify='center'>
                <TouchableOpacity onPress={()=>navigation.navigate('Lab1_Bai2')}>
                    <Text style={{color:COLORS.HEX_BLACK,fontSize:20,fontFamily:FONTFAMILY.poppins_bold}}>Bài 2</Text>
                </TouchableOpacity>
            </RowComponent>
        </SectionComponent>
    </View>
  )
}

export default Bai1