import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Image, ScrollView } from 'react-native';
import Header from './src/components/Header';
import MainStack from './src/components/Navigate';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <MainStack />
  );
}


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
}); */


/*
<View style={styles.container}>
       <Header />

      <MainStack />

       <Footer />

      <StatusBar style="auto" />
     </View>

 */
