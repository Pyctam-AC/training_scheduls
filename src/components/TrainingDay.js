import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function TrainingDay({route}) {

  const firstTraining = (`${route.params.firsttraining.name} - ${route.params.firsttraining.time}`)
  const secondTraining = (`${route.params.secondtraining.name} - ${route.params.secondtraining.time}`)

  return (
    <View style={styles.container}>
      <Text style={styles.titleDay}>{route.params.day}</Text>
      <Text style={styles.nameTraining}>{firstTraining}</Text>
      <Text style={styles.nameTraining}>{secondTraining}</Text>
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

