/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

import {
  QuizStackScreen,
  GestureRecognitionStackScreen,
  TextToGestureStackScreen,
} from './StackNavigators';

const HomeTab = createMaterialBottomTabNavigator();

export const HomeTabNavigator = () => {
  const theme = useTheme();
  return (
    <HomeTab.Navigator
      shifting
      barStyle={{ backgroundColor: theme.colors.surface }}
      initialRouteName="GestureRecognition"
    >
      <HomeTab.Screen
        name="GestureRecognition"
        component={GestureRecognitionStackScreen}
        options={{
          tabBarLabel: 'Gesture',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hand"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="TextToGesture"
        component={TextToGestureStackScreen}
        options={{
          tabBarLabel: 'Text',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-text-rotation-none"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Quiz"
        component={QuizStackScreen}
        options={{
          tabBarLabel: 'Quiz',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="brain"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;
