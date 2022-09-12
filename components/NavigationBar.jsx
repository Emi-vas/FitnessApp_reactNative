import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


import { COLORS } from '../assets/constants';


const NavigationBar = ({ page }) => {
    const navigation = useNavigation()

    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: COLORS.red,
                width: "100%",
                flexDirection: "row",
                justifyContent: 'space-around',
                padding: 7
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