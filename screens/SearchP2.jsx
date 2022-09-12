import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';

import { globalStyles } from '../styles/global'
import { Data } from '../assets/data/data'
import ExerciceCard from '../components/ExerciceCard';
import { COLORS } from '../assets/constants';

const SearchP2 = ({ route }) => {
    const { name } = route.params

    const [listExercises, setListExercises] = useState(Data)

    useEffect(() => {
        if(name != "" && name != "All") {
            const listFiltred = Data.filter((item) => item.bodyPart.includes(name.toLowerCase()))
            setListExercises(listFiltred)
        }
    }, [])

    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text style={globalStyles.mainTitle}>{name}</Text>
            </View>

           <View
                style={{
                    backgroundColor: COLORS.orangeLight,
                    marginBottom: 110
                }}
           >
                <FlatList 
                    data={listExercises}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ExerciceCard data={item}/>}
                />
           </View>

            <NavigationBar page="search" />
        </>
    );
};

export default SearchP2;