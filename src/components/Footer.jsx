/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import RoundedButton from './RoundedBotton';

const Footer = ({
  backgroundColor,
  leftButtonLabel = false,
  leftButtonPress = false,
  rightButtonLabel = false,
  rightButtonPress = false,
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: leftButtonLabel
          ? 'space-between'
          : 'flex-end',
        height: HEIGHT,
        backgroundColor,
        opacity: 0.6,
        alignItems: 'center',
        paddingHorizontal: FOOTER_PADDING,
      }}
    >
      {leftButtonLabel && (
        <RoundedButton
          label={leftButtonLabel}
          onPress={leftButtonPress}
        />
      )}
      <RoundedButton
        label={rightButtonLabel}
        onPress={rightButtonPress}
      />
    </View>
  );
};

export default Footer;
