import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import COLORS from '../assets/colors/Colors'
import { ShieldCross } from 'iconsax-react-native';

interface Props{
    value:string,
    onChange:(val:string)=>void,
    affix?:ReactNode,
    placeholder?:string,
    

}
const InputComponent = (props: Props) => {
  const { value, onChange, affix, placeholder } = props;
  const [isEmpty, setIsEmpty] = useState<boolean>(false); 

  const handleFocus = () => {
    setIsEmpty(value.trim() === ''); 
};

const handleChange = (val: string) => {
    onChange(val);
    setIsEmpty(val.trim() === '');
};
  return (
    <View style={[styles.inputContainer,{borderColor:isEmpty?COLORS.RED:COLORS.HEX_LIGHT_GREY}]}>
      {affix??affix}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder??''}
        onEndEditing={handleFocus}
       />
       {isEmpty?(<ShieldCross size="32" color="#FF8A65"/>):undefined}
    </View>
    
    
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.HEX_LIGHT_GREY,
        width: '100%',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 19
    },
    input: {
        padding: 0,
        margin: 0,
        flex: 1,
        paddingHorizontal: 14
    }
})
export default InputComponent