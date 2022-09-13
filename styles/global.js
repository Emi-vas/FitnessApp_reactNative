import { StyleSheet } from "react-native";
import { COLORS } from "../assets/constants";

export const globalStyles = StyleSheet.create({
    mainTitle : {
        color: "white", 
        backgroundColor: COLORS.red,
        fontSize: 20,
        textAlign: "center",
        letterSpacing: 5,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    mainTitle2 : {
        color: "white", 
        backgroundColor: COLORS.red,
        fontSize: 17,
        textAlign: "center",
        letterSpacing: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        textTransform: 'capitalize'
    }
})