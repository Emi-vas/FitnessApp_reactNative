import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, AsyncStorage } from 'react-native';
import ExerciceCard from '../ExerciceCard';

const TrainingList = ({ list, setYourTrainingList }) => {

    const clearList = async () => {
        await AsyncStorage.clear()
        setYourTrainingList(null)
    }

    return (
        <>
            <View>
                <Button 
                    title='Clear Your List' 
                    onPress={clearList} 
                />
            </View>
            <View
                style={{
                    paddingBottom: 140
                }}
            >
                <FlatList 
                    data={list}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ExerciceCard data={item} goToTopPage={()=>{}}/>}
                />
            </View>
        </>
    );
};

export default TrainingList;