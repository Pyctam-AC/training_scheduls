import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function TrainingDay({route}) {

  const firstTraining = (`${route.params.training_1.name} - ${route.params.training_1.time} - ${route.params.training_1.users}`)
  const secondTraining = (`${route.params.training_2.name} - ${route.params.training_2.time} - ${route.params.training_2.users}`)
  const thirdTraining = (`${route.params.training_3.name} - ${route.params.training_3.time} - ${route.params.training_3.users}`)
  const fourthTraining = (`${route.params.training_4.name} - ${route.params.training_4.time} - ${route.params.training_4.users}`)
  const fifthTraining = (`${route.params.training_5.name} - ${route.params.training_5.time} - ${route.params.training_5.users}`)

  return (
    <View style={styles.container}>
      <Text style={styles.titleDay}>{route.params.day}</Text>
      <Text style={styles.nameTraining}>{firstTraining}</Text>
      <Text style={styles.nameTraining}>{secondTraining}</Text>
      <Text style={styles.nameTraining}>{thirdTraining}</Text>
      <Text style={styles.nameTraining}>{fourthTraining}</Text>
      <Text style={styles.nameTraining}>{fifthTraining}</Text>
    </View>
  );
};

export default TrainingDay;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    top: '10%',
    left: '10%'
  },
  titleDay: {
    fontSize: 26,
  },
  nameTraining: {
    marginTop: '5%',
    fontSize: 16,
    width: '80%'
  }
});

