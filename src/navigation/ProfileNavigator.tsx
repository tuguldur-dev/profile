import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ChangeEmailScreen from '../screens/ChangeEmailScreen';
import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';
import { Text } from 'react-native';

export type ProfileStackParamList = {
  Profile: undefined;
  ChangePassword: undefined;
  ChangeEmail: undefined;
  ThemeSettings: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{ title: 'Change Password' }}
        />
        <Stack.Screen
          name="ChangeEmail"
          component={ChangeEmailScreen}
          options={{ title: 'Change Email' }}
        />
        <Stack.Screen
          name="ThemeSettings"
          component={ThemeSettingsScreen}
          options={{ title: 'Theme Settings' }}
        />
      </Stack.Navigator>
  );
};
