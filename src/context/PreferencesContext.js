/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';

const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export default PreferencesContext;
