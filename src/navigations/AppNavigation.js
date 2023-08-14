import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from '../screens/PostScreen';
// import CommentScreen from '../screens/CommentScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
