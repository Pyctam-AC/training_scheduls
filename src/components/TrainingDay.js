import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function TrainingDay({route}) {

  const firstTraining = (`${route.params.firsttraining.name} - ${route.params.firsttraining.time}`)
  const secondTraining = (`${route.params.secondtraining.name} - ${route.params.secondtraining.time}`)

  return (
    <View>
      <Text>{route.params.day}</Text>
      <Text>{firstTraining}</Text>
      <Text>{secondTraining}</Text>
    </View>
  );
};

export default TrainingDay;


/* {new Intl.DateTimeFormat('ru-RU', months).format(new Date())}

<Text>{
        new Intl.DateTimeFormat()
        .format(new Date())
        }
</Text>

*/
