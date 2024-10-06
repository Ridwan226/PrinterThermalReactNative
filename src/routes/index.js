import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, SplashScreen} from '../pages';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SplashScreen}
        name="SplashScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
