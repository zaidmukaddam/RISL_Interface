/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

export const FormTextInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const error = errors[name];

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        error={error && touched}
        {...inputProps}
      />
      <HelperText type="error" visible={error && touched}>
        {error}
      </HelperText>
    </View>
  );
};

export const FormInput = () => {};
