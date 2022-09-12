import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';
import { globalStyles } from '../styles/global';

import { categories } from '../assets/data/categories';
import SearchCategorie from '../components/SearchCategorie';

const SearchP1 = () => {
    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text style={globalStyles.mainTitle}> Select a categorie </Text>
            </View>

            <View style={{ marginBottom: 100 }}>
                <FlatList 
                    data={categories}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <SearchCategorie name={item.name} imageUrl={item.img} />}
                />
            </View>

            <NavigationBar page='search' />
        </>
    );
};

export default SearchP1;