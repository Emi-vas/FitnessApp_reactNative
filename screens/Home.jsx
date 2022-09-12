import { View, Text, Image, ImageBackground, ScrollView, Button, StyleSheet } from 'react-native';
import { COLORS } from '../assets/constants';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';

const Home = () => {
    return (
        <>
            <FocusedStatusBar />

            <ScrollView style={{ marginBottom: 63 }}>
                <Text 
                    style={{ 
                        color: "white", 
                        backgroundColor: COLORS.red,
                        fontSize: 25,
                        textAlign: "center"
                    }}
                >
                    Fitness Club
                </Text>



                <Image 
                    source={require('../assets/img/banner.png')}
                    resizeMode="cover"
                    style={{width: "100%", height: 450  }}
                />

                <View
                    style={styles.bloc}
                >
                    <View style={{ width: "45%" }}>
                        <Button title="Search for an exercices" color={COLORS.red}/>
                    </View>

                    <View style={{ width: "45%" }}>
                        <Text style={styles.text}>
                            In a bank of 1327 exercises !
                        </Text>
                    </View>

                </View>

                
                <View
                    style={{
                        ...styles.bloc,
                        backgroundColor: COLORS.orangeLight
                    }}
                >
                    <View style={{ width: "45%" }}>
                        <Text style={styles.text}>
                            Save your favorite exercises in your favorites list
                        </Text>
                    </View>

                    <View style={{ width: "45%" }}>
                        <Button title="Your training list" color={COLORS.red}/>
                    </View>
                </View>

                <View>
                    <Text
                        style={{ 
                            color: COLORS.red, 
                            fontSize: 35,
                            textAlign: "center",
                            paddingVertical: 40,
                            fontFamily: "Amatic"
                        }}
                    >
                        Sweat, Smile and Reapeat
                    </Text>
                </View>
            </ScrollView>

            <NavigationBar />
        </>
    );
};

const styles = StyleSheet.create({
    bloc: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        paddingVertical: 50
    },

    text: {
        color: COLORS.red, 
        fontSize: 15, 
        textAlign: 'center'
    }
})

export default Home;