import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function TrainingDay({route}) {

  const firstTraining = (`${route.params.training_1.name} - ${route.params.training_1.time}`)
  const secondTraining = (`${route.params.training_2.name} - ${route.params.training_2.time}`)
  const thirdTraining = (`${route.params.training_3.name} - ${route.params.training_3.time}`)

  return (
    <View style={styles.container}>
      <Text style={styles.titleDay}>{route.params.day}</Text>
      <Text style={styles.nameTraining}>{firstTraining}</Text>
      <Text style={styles.nameTraining}>{secondTraining}</Text>
      <Text style={styles.nameTraining}>{thirdTraining}</Text>
    </View>
  );
};

export default TrainingDay;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%'
  },
  titleDay: {
    fontSize: 26,
  },
  nameTraining: {
    marginTop: '5%',
    fontSize: 16,
  }
});

