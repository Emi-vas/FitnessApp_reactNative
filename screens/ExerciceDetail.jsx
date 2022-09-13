import FocusedStatusBar from "../components/StatusBar";
import NavigationBar from "../components/NavigationBar";
import { View, Text, Image, StyleSheet, ScrollView, Button, FlatList, AsyncStorage } from "react-native";
import { globalStyles } from "../styles/global";
import { COLORS } from "../assets/constants";
import { Data } from "../assets/data/data";
import ExerciceCard from "../components/ExerciceCard";
import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const ExerciceDetail = ({ route }) => {
    const ref = useRef()
    const navigation = useNavigation()

    const {data} = route.params
    const similarExercises = Data.filter(item => (
        item.bodyPart.includes(data.bodyPart) &&
        item.equipment.includes(data.equipment) &&
        item.name != data.name
    ))

    const listInfos = [
        {
            title : data.bodyPart,
            url: require('../assets/img/body-part.png')
        },
        {
            title : data.equipment,
            url: require('../assets/img/equipment.png')
        },
        {
            title : data.target,
            url: require('../assets/img/target.png')
        },
    ]

    const addToTrainingList = async () => {
        let yourTrainingList = await AsyncStorage.getItem('yourTrainingList')

        if(yourTrainingList == null) {
            let dataB = [data]
            dataB = JSON.stringify(dataB)
            console.log("dataB")
            await AsyncStorage.setItem('yourTrainingList', dataB) 
        } else {
            //If there is aleready a list in storage
            yourTrainingList = JSON.parse(yourTrainingList)
            
            let isPresent = false
            yourTrainingList.forEach((item) => {
                if(item.id == data.id){
                    isPresent = true
                }
            })

            if(!isPresent){
                let newList = [data, ...yourTrainingList]
                console.log(newList)
                newList = JSON.stringify(newList)
                await AsyncStorage.setItem('yourTrainingList', newList) 
            }
        }
        navigation.navigate("YourTraining")
    }

    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text style={ globalStyles.mainTitle2 }>{data.name}</Text>
            </View>

            <ScrollView ref={ref} style={{ marginBottom: 60 }}>
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
                    <Button 
                        title="add to your list"  
                        onPress={addToTrainingList}
                    />
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    {
                        listInfos.map((info, index) => (
                            <View
                                style={styles.orangeBloc}
                                key={index}
                            >
                                <Image 
                                    source={info.url}
                                    style={{ width: 40, height: 40 }}
                                />
                                <Text style={{ color: COLORS.red}}>{info.title}</Text>
                            </View>
                        ))
                    }
                </View>
                
                <View
                    style={{
                        backgroundColor: COLORS.orangeLight,
                        marginTop: 30
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: COLORS.red,
                            backgroundColor: 'white',
                            paddingLeft: 20
                        }}
                    >Similar Exercises :</Text>
                {
                    similarExercises
                    .slice(0, 5)
                    .map((exercises, index) => <ExerciceCard data={exercises} key={index} goToTopPage={() => {ref.current.scrollTo({x:0, y:0, animated:true})}} />)
                }
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