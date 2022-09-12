import { View, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import FocusedStatusBar from '../components/StatusBar';

const Home = () => {
    return (
        <>
            <FocusedStatusBar />
            <View>
                <Text>Home</Text>
            </View>
            <NavigationBar />
        </>
    );
};

export default Home;