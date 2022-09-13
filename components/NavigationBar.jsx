import { View, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


import { COLORS } from '../assets/constants';
import { useEffect, useState } from 'react';


const NavigationBar = ({ page, setPadding, padding }) => {
    const navigation = useNavigation()

    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    useEffect(() => {


        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow', () => {
                setIsKeyboardOpen(true)
                if(padding) {
                    setPadding(0)
                }
            }
        )
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide', () => {
                setIsKeyboardOpen(false)
                if(padding) {
                    setPadding(100)
                }
            }
        )

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        }

    }, [])

    if(isKeyboardOpen) {
        return <></>
    }

    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: COLORS.red,
                width: "100%",
                flexDirection: "row",
                justifyContent: 'space-around',
                padding: 5,
            }}
        >
            <TouchableOpacity 
                style={{ alignItems: 'center', width: 70 }}
                onPress={()=> navigation.navigate("Home")}
            >
                 <Entypo name="home" size={30} color={page == "home" ? COLORS.orangeLight : "white"} />
                 <Text style={{color: "white"}} >Home</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{ alignItems: 'center' }}
                onPress={()=> navigation.navigate("SearchP1")}
            >
                 <Feather name="search" size={30} color={page == "search" ? COLORS.orangeLight : "white"} />
                 <Text style={{color: "white"}} >Search</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{ alignItems: 'center' }}
                onPress={()=> navigation.navigate("YourTraining")}
            >
                <MaterialIcons name="fitness-center" size={30} color={page == "training" ? COLORS.orangeLight : "white"}/>
                <Text style={{color: "white"}} >Your Training</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NavigationBar;