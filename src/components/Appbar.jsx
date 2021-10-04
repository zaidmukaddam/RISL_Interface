/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Header = (props) => {
  const theme = useTheme();
  const { scene, previous, navigation } = props;
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View>
      <Appbar.Header>
        {previous ? (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        ) : (
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        )}
        <Appbar.Content title={title} />
      </Appbar.Header>
      <StatusBar
        style={theme.dark ? 'light' : 'light'}
        backgroundColor={
          theme.dark ? theme.colors.surface : theme.colors.primary
        }
      />
    </View>
  );
};

export default Header;
