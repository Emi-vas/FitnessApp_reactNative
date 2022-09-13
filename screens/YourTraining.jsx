import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';
import EmptyList from '../components/yourTraining/EmptyList';
import TrainingList from '../components/yourTraining/TrainingList';

import { globalStyles } from "../styles/global"

const YourTraining = () => {
    const [yourTrainingList, setYourTrainingList] = useState(null)
    const isFocused = useIsFocused()

    useEffect(() => {
        const getList = async () => {
            const list = await AsyncStorage.getItem('yourTrainingList')
            setYourTrainingList(JSON.parse(list))
        }
        getList()
    }, [isFocused])


    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text style={globalStyles.mainTitle}>Your Training List</Text>
            </View>

            {
                yourTrainingList ? <TrainingList list={yourTrainingList} setYourTrainingList={setYourTrainingList} /> : <EmptyList />
            }

            <NavigationBar page='training' />
        </>
    );
};

export default YourTraining;