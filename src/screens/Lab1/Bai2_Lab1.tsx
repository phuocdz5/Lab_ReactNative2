import React from 'react'
import { CardComponent, ContainerComponent, RowComponent, SectionComponent } from '../../components'
import ButtonComponent from '../../components/ButtonComponent'

const Bai2_Lab1 = ({navigation}:any) => {
  return (
    <ContainerComponent isScroll>
        <SectionComponent>
            <CardComponent
                title_1='Địa điểm'
                description_1='Hồ Tràm, Vũng Tàu'
                title_2='Thời gian'
                description_2='09:00 AM - 12:00 AM, 12/12/2024'
                title_3='Phương tiện'
                description_3='Xe bus'
                title_4='Thời gian'
                description_4='21:00 - 22:00'
                title_5='Hình ảnh'
                description_5='https://ticotravel.com.vn/wp-content/uploads/2022/11/Ho-Tram-2.jpg'
                checkButton={false}/>
        </SectionComponent>
        <SectionComponent>
            <CardComponent
                title_1='Tên khách sạn'
                description_1='Hồng Quỳnh'
                title_2='Giờ mở cửa'
                description_2='06:00 AM - 12:00 AM'
                title_3='Địa điểm'
                description_3='234 Quang Trung, Hồ Chí Minh'
                checkButton={true}/>
        </SectionComponent>
        <SectionComponent>
            <RowComponent justify='center'>
                <ButtonComponent type='orange' text='Bài 3' onPress={()=>navigation.navigate('Lab1_Bai3')}/>
            </RowComponent>
        </SectionComponent>
    </ContainerComponent>
  )
}

export default Bai2_Lab1