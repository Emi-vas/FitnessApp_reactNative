import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { COLORS } from '../assets/constants';

const ExerciceCard = ({ data, goToTopPage }) => {
    const navigation = useNavigation()

    return (
        <View
            style={{
                flexDirection: 'row',
                marginVertical: 7,
                backgroundColor: "white",
                height: 200,
                alignItems: 'center'
            }}
        >
            <Image 
                source={{uri: data.gifUrl}}
                style={{
                    width: "40%",
                    height: 150
                }}
            />
            <View
                style={{
                    width: "60%",
                    height: "100%",
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingBottom: 10
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        alignSelf: "center",
                        textAlign: 'center',
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                        color: COLORS.black,
                        fontSize: 16,
                        borderBottomColor: COLORS.reLight,
                        borderBottomWidth: 2,
                        width: "100%"
                    }}
                >{data.name}</Text>

                <Text style={{marginVertical: 5, padding: 5}}>
                    <Text style={{ fontWeight: "bold", color: COLORS.red }}>Equipment :</Text> {data.equipment}
                </Text>
                <Text style={{ marginVertical: 5, padding: 5 }}>
                    <Text style={{ fontWeight: "bold", color: COLORS.red }}>Muscle Target :</Text> {data.target}
                </Text>

                <View style={{ alignSelf: "center" }}>
                    <Button 
                        title='View Details' 
                        color={COLORS.red}
                        onPress={() => {
                            navigation.navigate('ExerciceDetail', {data})
                            goToTopPage()
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default ExerciceCard;