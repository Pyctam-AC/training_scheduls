import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

export default Loading = () => {
  return (
    <View style={{
      marginTop: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      //borderRadius: 5,
      //backgroundColor: '#fff',
      //borderWidth: 1,
      marginBottom: '40%'
    }}>
      <ActivityIndicator size="large"
        style={{
          marginTop: 20,
        }}
      />
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontSize: 14,
          color: "black",
        }}
      >
        Загрузка ...
      </Text>
    </View>
  );
}
