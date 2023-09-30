import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl
} from 'react-native';
import styled from 'styled-components/native';
//import {TrainingDays} from '../utils/TrainingDays.js';
import Footer from '../components/Footer';
import { getScheduls } from '../utils/trainingApi.js';
import Loading from '../components/Loading';
import dateToDay from '../utils/Date';

export default function HomeScreen ({navigation}) {

  //const [listOfItems, setlistOfItems] = useState(TrainingDays);

  const [listOfItems, setlistOfItems] = useState(true);
  const [isLoading, setIsLoading] = useState()

  const getTraining = () => {
    setIsLoading(true)
    getScheduls()
      .then((res) => {
        console.log(res)
        setlistOfItems(res)
      })
      .catch((e) => {
        console.log(e)
        Alert.alert('Возникла ошибка', 'Не удалось обновить расписание')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect (() => {
    getTraining()
  }, [])

  return (
    <View
      style={styles.main}
    >
      <StatusBar theme='auto' />
      <View style={[styles.box, styles.elevation]}>
        <Text style={styles.title}>группа НП-3</Text>
      </View>
      <Text style={styles.date}>Сегодня {dateToDay}</Text>
      <View>
        {isLoading ?
          <Loading /> :
          <FlatList
            refreshControl={<RefreshControl
                              refreshing={isLoading}
                              onRefresh={getTraining}
                            />}
            data={listOfItems}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TrainingDay', item)}
              >
                <Text style={styles.day} >{item.day}</Text>
              </TouchableOpacity>
            )}
          />
        }
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
    //backgroundColor: 'skyblue',
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
    fontSize: 24,
    color: 'black'
  },
  date:{
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    padding: 16,
    textAlign: 'left',
    borderRadius: 5,
    backgroundColor: '#afeeee',
    borderWidth: 2,
    marginTop: 10,
  },
  day: {
    fontSize: 16,
  },
})

