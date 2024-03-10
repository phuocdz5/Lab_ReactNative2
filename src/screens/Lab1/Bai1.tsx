import { ArrowLeft2, User } from 'iconsax-react-native'
import React from 'react'
import { ContainerComponent, HeaderComponent, RowComponent, SectionComponent } from '../../components'
import ButtonComponent from '../../components/ButtonComponent'

const Bai1 = ({navigation}:any) => {
  return (
    <ContainerComponent>
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
                <ButtonComponent type='orange' text='Bài 2' onPress={()=>navigation.navigate('Lab1_Bai2')}/>
            </RowComponent> 
        </SectionComponent>
    </ContainerComponent>
  )
}

export default Bai1