import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { COLORS } from '../../assets/constants';

const EmptyList = () => {
    const navigation = useNavigation()

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 15,
                        marginBottom: 10
                    }}
                >You haven't exercises in your list yet</Text>
            </View>

            <Button 
                title='Add Exercises' 
                color={COLORS.red}
                onPress={() => navigation.navigate('SearchP1')}
            />
        </View>
    );
};

export default EmptyList;