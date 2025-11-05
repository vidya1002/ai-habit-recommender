import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/index';
import SuggestionsScreen from './app/suggestions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
