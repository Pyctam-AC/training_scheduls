import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View>
      <Text style={styles.titleData}>© Rustam Sultangaliev {new Date().getFullYear()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleData: {
    fontSize: 12,
    marginTop: '6%',
    textAlign: "center",
  }
});
