import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback
} from 'react-native';


export default function secondFile() {

  let months = { month: 'long'};
  let days = { weekday: 'long'};

  const hendleButtonPress = () => Alert.alert(
    "Window",
    "any message",
    [
      {text: "ok", onPress: () => console.log("ok")},
      {text: "NO!", onPress: () => console.log("NO!")},
      {text: "cancel", onPress: () => console.log("cancel")}
    ],
    {cancelable: true}
    )

  return (
    <View
      style={styles.main}
    >
      <View style={[styles.box, styles.elevation]}>
        <Text>Расписание</Text>
      </View>
      <Text>{new Date().getDate()}{new Intl.DateTimeFormat('ru-RU', months).format(new Date())}</Text>
      <Text>{new Intl.DateTimeFormat('ru-RU', days).format(new Date())}</Text>
      <Button
        title='Click'
        onPress={hendleButtonPress}
        style={styles.elevation}
      />

      <TouchableWithoutFeedback onPress={hendleButtonPress} >
        <Image source={{
          width: 300,
          height: 250,
          uri: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
        }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    top: 100,
    width: '66%',
    height: '35%',
    backgroundColor: 'skyblue',
  },
  box: {
    backgroundColor: '#abcdef',
    width: '80%',
    height: 40,
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 10,
    /* top: -80, */
    alignItems: 'center',
    justifyContent: 'center'
  },
  elevation: {
    elevation: 20,
    shadowColor: '#292929',
  },
})
