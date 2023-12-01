import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import  reds  from './js/berillium-native/config';
import poppins from './js/berillium-native/font/font';

export default function App() {
  return (
    <View style={styles.container}>
    <View>
      <Text>Log In</Text>
      <TextInput />
      <Text style={[reds.bgRed300, reds.textWhite]}>Password</Text>
      <TextInput />
      <StatusBar style="auto" />
      <Button title="Login" />
    </View>
    
    <View>
      <Text style={poppins.light}>Quinoa Salad</Text>
      <Button color={reds.buttonBlue.color} title="Click Me"></Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
