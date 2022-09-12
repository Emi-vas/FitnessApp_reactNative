import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';

const SearchP1 = () => {
    return (
        <>
            <FocusedStatusBar />


            <NavigationBar page='search' />
        </>
    );
};

export default SearchP1;