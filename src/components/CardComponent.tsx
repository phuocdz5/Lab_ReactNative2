import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { gobalStyles } from '../styles/gobalStyles';
import { SectionComponent } from '.';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props{
    title_1?:string;
    description_1?:string;
    title_2?:string;
    description_2?:string;
    title_3?:string;
    description_3?:string;
    title_4?:string;
    description_4?:string;
    title_5?:string;
    description_5?:string;
    checkButton:boolean


}
const CardComponent = (props:Props) => {
    const {
        title_1,
        description_1,
        title_2,
        description_2,
        title_3,
        description_3,
        title_4,
        description_4,
        title_5,
        description_5,
        checkButton }=props
  return (
    <View style={[gobalStyles.card,{paddingVertical:15}]}>
      {title_1 || description_1 !=undefined?(
        <SectionComponent>
            <Text style={gobalStyles.titleText}>{title_1}</Text>
            <Text style={gobalStyles.desciptionText}>{description_1}</Text>
        </SectionComponent>
      ):undefined}
      {title_2 || description_2 !=undefined?(
        <SectionComponent>
            <Text style={gobalStyles.titleText}>{title_2}</Text>
            <Text style={gobalStyles.desciptionText}>{description_2}</Text>
        </SectionComponent>
      ):undefined}
      {title_3 || description_3 !=undefined?(
        <SectionComponent>
            <Text style={gobalStyles.titleText}>{title_3}</Text>
            <Text style={gobalStyles.desciptionText}>{description_3}</Text>
        </SectionComponent>
      ):undefined}
      {title_4 || description_4 !=undefined?(
        <SectionComponent>
            <Text style={gobalStyles.titleText}>{title_4}</Text>
            <Text style={gobalStyles.desciptionText}>{description_4}</Text>
        </SectionComponent>
      ):undefined}
      {title_5 || description_5 !=undefined?(
        <SectionComponent>
            <Text style={gobalStyles.titleText}>{title_5}</Text>
            {description_5!=null?(<Image style={{width:'100%',height:150}} src={description_5}/>):undefined}
        </SectionComponent>
      ):undefined}
      {checkButton?(
        <SectionComponent>
            <Button title='Chi tiết' />
        </SectionComponent>
      ):undefined}
    </View>
  )
}

export default CardComponent