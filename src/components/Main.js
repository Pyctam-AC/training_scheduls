import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback
} from 'react-native';
import {TrainingDays} from '../utils/TrainingDays.js';
import Footer from './Footer.js';


export default function Main({navigation}) {

  const [listOfItems, setlistOfItems] = useState(TrainingDays);

  return (
    <View
      style={styles.main}
    >
      <View style={[styles.box, styles.elevation]}>
        <Text style={styles.title}>Расписание группы НП-2</Text>
      </View>
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('TrainingDay', item)}
            >
              <Text >{item.day}</Text>
            </TouchableOpacity>
          )}
        />
        <Footer />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    top: '5%',
    left: '8%',
    width: '85%',
    height: '85%',
    backgroundColor: 'skyblue',
  },
  box: {
    backgroundColor: '#abcdef',
    width: '100%',
    height: 70,
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  elevation: {
    elevation: 20,
    shadowColor: '#292929',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: 'black'
  },
  button: {
    padding: 18,
    textAlign: 'left',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 2,
    marginTop: 10,
  },
})
