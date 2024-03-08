import { StyleSheet } from "react-native";
import COLORS from "../assets/colors/Colors";
import { FONTFAMILY } from "../../assets/fonts";

export const gobalStyles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    section:{
        paddingHorizontal:15,
        paddingBottom:15
    },
    card:{
        borderRadius:25,
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.HEX_LIGHT_GRAY,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleText:{
        color:COLORS.HEX_BLACK,
        fontFamily:FONTFAMILY.poppins_regular,

    },
    desciptionText:{
        color:COLORS.HEX_BLACK,
        fontFamily:FONTFAMILY.poppins_bold
    }
})