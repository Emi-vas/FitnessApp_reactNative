import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';

import { globalStyles } from '../styles/global'
import { Data } from '../assets/data/data'
import ExerciceCard from '../components/ExerciceCard';
import { COLORS } from '../assets/constants';

const SearchP2 = ({ route }) => {
    const { name } = route.params

    const [listExercises, setListExercises] = useState(Data)
    const [padding, setPadding] = useState(100)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if(name != "" && name != "All") {
            const listFiltred = Data.filter((item) => item.bodyPart.includes(name.toLowerCase()))
            setListExercises(listFiltred)
        }
    }, [])

    useEffect(() => {
        const listFiltred = Data.filter((item) => (
            item.bodyPart.includes(searchValue) ||
            item.equipment.includes(searchValue) ||
            item.name.includes(searchValue) ||
            item.target.includes(searchValue)
        ))
        setListExercises(listFiltred)
    }, [searchValue])
    

    return (
        <>
            <FocusedStatusBar />
            <View
                style={{
                    backgroundColor: COLORS.red,
                    alignItems: 'center',
                    paddingBottom: 3
                }}
            >
                <TextInput 
                    onChangeText={(val) => setSearchValue(val.toLowerCase())}
                    placeholder={`Search in ${name} exercises`}
                    style={{
                        padding: 5,
                        paddingHorizontal: 20,
                        backgroundColor: 'white',
                        width: '90%',
                        borderRadius: 35
                    }}
                />
            </View>

           <View
                style={{
                    backgroundColor: COLORS.orangeLight,
                    marginBottom: padding
                }}
           >
                <FlatList 
                    data={listExercises}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ExerciceCard data={item} goToTopPage={()=>{}}/>}
                />
           </View>

            <NavigationBar page="search" setPadding={setPadding} padding={padding} />
        </>
    );
};

export default SearchP2;