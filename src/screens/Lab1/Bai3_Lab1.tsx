import React, { useState } from 'react'
import { ContainerComponent, InputComponent, RowComponent, SectionComponent } from '../../components'
import ButtonComponent from '../../components/ButtonComponent'

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
    <ContainerComponent style={{marginTop:15}}>
        <SectionComponent>
            <InputComponent value={values.text1} placeholder='text1' onChange={val => handleChangeValue('text1',val)}/>
        </SectionComponent>
        <SectionComponent>
            <InputComponent value={values.text2} placeholder='text2' onChange={val => handleChangeValue('text2',val)}/>
        </SectionComponent>
        <SectionComponent>
            <InputComponent value={values.text3} placeholder='text3' onChange={val => handleChangeValue('text3',val)}/>
        </SectionComponent>
        <SectionComponent>
            <InputComponent value={values.text4} placeholder='text4' onChange={val => handleChangeValue('text4',val)}/>
        </SectionComponent>
        <SectionComponent>
            <RowComponent justify='center'>
                <ButtonComponent type='orange' text='Bài 1' onPress={()=>navigation.navigate('Lab1_Bai1')}/>
            </RowComponent>
        </SectionComponent>
    </ContainerComponent>
  )
}

export default Bai3_Lab1