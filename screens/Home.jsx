import { View, Text } from 'react-native';
import FocusedStatusBar from '../components/StatusBar';

const Home = () => {
    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text>Home</Text>
            </View>
        </>
    );
};

export default Home;