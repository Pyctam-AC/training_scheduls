import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View>
      <Text>{new Date().getFullYear()}</Text>
    </View>
  );
}
