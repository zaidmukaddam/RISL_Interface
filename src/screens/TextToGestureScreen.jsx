/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { FormTextInput } from '../components/FormInput';
import StringImages from '../components/StringImages';

function TextToGestureScreen() {
  const [text, setText] = React.useState('');
  // Make this false
  const [showImages, setShowImages] = React.useState(false);
  const initialValues = { text: '' };

  const validationSchema = Yup.object({
    text: Yup.string()
      .required('Please enter the required field')
      .matches(
        /^[aA0-zZ9\s]+$/,
        'Only alphabets are allowed for this field ',
      ),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setText(values.text.toLowerCase());
          setShowImages(true);
        }}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <Field
              name="text"
              label="Text"
              component={FormTextInput}
            />
            <Button
              icon="send"
              mode="contained"
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
      <Divider style={styles.divider} />
      {showImages && (
        <View style={styles.cardContainer}>
          <StringImages text={text} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  StringImages: {},
  form: {
    margin: 10,
    padding: 5,
  },
  container: {
    flex: 1,
    marginTop: 20,
    elevation: 4,
  },
  surface: {
    elevation: 4,
    height: '100%',
  },
  TextInput: {},
  divider: {},
  cardContainer: {
    flex: 1,
  },
});

export default TextToGestureScreen;
