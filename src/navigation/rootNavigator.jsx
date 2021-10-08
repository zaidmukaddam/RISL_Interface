/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeTabNavigator } from './TabNavigators';
import DrawerContent from '../components/DrawerContent';
import {
  ReportStackScreen,
  AboutStackScreen,
  FaqStackScreen,
} from './StackNavigators';

const Drawer = createDrawerNavigator();

const RootNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="home" component={HomeTabNavigator} />
    <Drawer.Screen name="report" component={ReportStackScreen} />
    <Drawer.Screen name="about" component={AboutStackScreen} />
    <Drawer.Screen name="faq" component={FaqStackScreen} />
  </Drawer.Navigator>
);

export default RootNavigator;
