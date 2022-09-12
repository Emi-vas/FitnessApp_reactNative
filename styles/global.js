import { StyleSheet } from "react-native";
import { COLORS } from "../assets/constants";

export const globalStyles = StyleSheet.create({
    mainTitle : {
        color: "white", 
        backgroundColor: COLORS.red,
        fontSize: 20,
        textAlign: "center",
        letterSpacing: 5,
        paddingVertical: 7
    }
})