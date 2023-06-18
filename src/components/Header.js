import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={[styles.header, styles.elevation]}>
      <Text style={styles.text}>Расписание тренировок</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#abcdef',
    width: '90%',
    height: 60,
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 10,
    top: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  elevation: {
    elevation: 40,
    shadowColor: '#292929',
  },
  text: {
    fontSize: 20,
    fontWeight: 900,
    color: '#310a58'
  }
})
