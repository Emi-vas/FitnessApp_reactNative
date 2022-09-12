import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import SearchP1 from "./screens/SearchP1";
import YourTraining from './screens/YourTraining'
import SearchP2 from "./screens/SearchP2";


const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export default function App() {
    const [loaded] = useFonts({
      InterBold: require("./assets/fonts/Inter-Bold.ttf"),
      InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
      InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
      InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
      InterLight: require("./assets/fonts/Inter-Light.ttf"),
      Amatic: require("./assets/fonts/AmaticSC-Regular.ttf"),

    })

    if(!loaded) return null
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SearchP1" component={SearchP1} />
          <Stack.Screen name="SearchP2" component={SearchP2} />
          <Stack.Screen name="YourTraining" component={YourTraining} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
