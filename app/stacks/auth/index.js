import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from './screens/Login';
import { PATHS } from '../../const/paths';
import OnBoarding from './screens/OnBoarding';
import Email from './screens/Email';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name={PATHS.OnBoarding}
      component={OnBoarding}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name={PATHS.Email}
      component={Email}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;
