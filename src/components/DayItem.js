import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function DayItem({item}) {
  return (
    <TouchableWithoutFeedback >
      <Text style={styles.text}>{item.day}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create ({
  text: {
    padding: 18,
    textAlign: 'left',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 2,
    marginTop: 10,
  }
})
