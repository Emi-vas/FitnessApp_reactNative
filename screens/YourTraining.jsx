import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';

const YourTraining = () => {
    return (
        <>
            <FocusedStatusBar />


            <NavigationBar page='training' />
        </>
    );
};

export default YourTraining;