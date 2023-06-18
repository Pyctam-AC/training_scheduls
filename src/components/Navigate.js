import React, { useState } from 'react';
import Main from './Main';
import TrainingDay from './TrainingDay';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate () {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Расписание тренировок" }}
      />
      <Stack.Screen
        name="TrainingDay"
        component={TrainingDay}
        options={{ title: "Тренировочный день" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
}


