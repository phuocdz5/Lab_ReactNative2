import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent } from '../../components'

const Bai1_2_Lab4 = () => {
    const [selectImage, setImage] = useState('')


    const takePhotoFromCamera = () => {
        let options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: true,
        }
        launchCamera(options, response => {
            if (response?.assets && response.assets.length > 0) {
                const firstImageUri = response.assets[0].uri;
                if (firstImageUri !== undefined) {
                    setImage(firstImageUri);
                }
            }
        })
    }
    const PickerImage = () => {
        let options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: true,
        }
        launchImageLibrary(options, response => {
            if (response?.assets && response.assets.length > 0) {
                // Kiểm tra xem uri có được định nghĩa không trước khi đặt state
                const firstImageUri = response.assets[0].uri;
                if (firstImageUri !== undefined) {
                    setImage(firstImageUri);
                }
            }
        })
    }
    return (
        <ContainerComponent>
            <SectionComponent>
                <RowComponent justify='center'>
                <Image style={{ width: 200, height: 200 ,borderRadius:100}} source={{ uri: selectImage || 'https://st.quantrimang.com/photos/image/2020/02/22/avatar-den-co-don-9.png' }} />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent styles={{ height: 56 }} type='orange' text='Chụp ảnh từ điện thoại' onPress={takePhotoFromCamera} />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent styles={{ height: 56 }} type='orange' text='Chọn ảnh từ thư viện' onPress={PickerImage} />
            </SectionComponent>
        </ContainerComponent>
    )
}

export default Bai1_2_Lab4