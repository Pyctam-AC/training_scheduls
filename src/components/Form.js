import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

export default function Form() {

  const [text, setValue] = useState('')

  const onChange = (text) => {
    setValue(text)
  };

  return (
    <View >
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder='Тренировка'
      />
      <Button
        title='Добавить тренровку'
        onPress={() => addHadler (text)}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  input: {
    padding: 18,
    backgroundColor: '#f0f8ff',
    borderBottomWidth: 1,
    marginBottom: 10,
  }
})
