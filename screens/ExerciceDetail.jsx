import FocusedStatusBar from "../components/StatusBar";
import NavigationBar from "../components/NavigationBar";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { COLORS } from "../assets/constants";

const ExerciceDetail = ({ route }) => {
    const {data} = route.params

    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text style={ globalStyles.mainTitle }>{data.name}</Text>
            </View>

            <ScrollView style={{ marginBottom: 60 }}>
                <Image 
                    source={{uri: data.gifUrl}}
                    style={{
                        height: 300,
                        marginTop: 10
                    }}
                />

                <View>
                    <Text
                        style={{
                            fontSize: 15,
                            padding: 7,
                            textAlign: 'center',
                            marginTop: 12
                        }}
                    >
                        Exercises keep you strong, <Text style={styles.strong}>{data.name}</Text> is one of the best exercises to target your <Text style={styles.strong}>{data.target}</Text>. It will help you improve your mood and gain energy
                    </Text>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <Button title="add to your list" color={COLORS.red} />
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <View
                        style={styles.orangeBloc}
                    >
                        <Image 
                            source={require('../assets/img/body-part.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ color: COLORS.red}}>{data.bodyPart}</Text>
                    </View>

                    <View
                        style={styles.orangeBloc}
                    >
                        <Image 
                            source={require('../assets/img/equipment.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ color: COLORS.red}}>{data.equipment}</Text>
                    </View>

                    <View
                        style={styles.orangeBloc}
                    >
                        <Image 
                            source={require('../assets/img/target.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ color: COLORS.red}}>{data.target}</Text>
                    </View>
                </View>


            </ScrollView>
        
            <NavigationBar page="search" />
        </>
    );
};

const styles = StyleSheet.create({
    strong: {
        fontSize: 18,
        color: COLORS.red,
        fontWeight: 'bold'
    },

    orangeBloc: {
        backgroundColor: COLORS.orangeLight,
        width: 120,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 7
    }
})

export default ExerciceDetail;