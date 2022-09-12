import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const SearchCategorie = ({ name, imageUrl }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('SearchP2', {name})}
            activeOpacity={1}
            style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                position: 'relative',
                marginVertical: 20,
            }}
        >
            <Text
                style={{
                    position: 'absolute',
                    color: "white",
                    zIndex: 3,
                    fontSize: 37
                }}
            >{name}</Text>
            <Image 
                source={imageUrl}
                style={{
                    width: "80%",
                    height: 190
                }}
            />
        </TouchableOpacity>
    );
};

export default SearchCategorie;