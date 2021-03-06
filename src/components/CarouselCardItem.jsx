/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { Surface, Button } from 'react-native-paper';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => (
  <View style={styles.container} key={index}>
    <Surface style={styles.surface}>
      {item.imageComponent}
      <Button mode="contained" style={styles.btn}>
        {item.char}
      </Button>
    </Surface>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginBottom: '10%',
  },
  surface: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 5.29,
    shadowRadius: 5.65,
    elevation: 4,
  },
  image: {},
  header: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  textBox: {
    alignItems: 'center',
    // height: 40,
    width: '75%',
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopLeftRadius: 30,
  },
  btn: {
    width: '75%',
    margin: 5,
    padding: 5,
  },
});

export default CarouselCardItem;
