
import {Button, View, StatusBar, StyleSheet,  Text, TextInput} from 'react-native';
import { heading } from '../js/berillium-native/text/text';
import poppins from '../js/berillium-native/font/fonts';
import { margin } from '../js/berillium-native/spacing/margin';
import { login } from '../js/berillium-native/form/form';

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={margin.top}>
          <View style={margin.top}>
            <Text style={[heading.h2, poppins.regular]}>Log In</Text>
            <TextInput style={[login.field, poppins.light]}/>
          </View>

          <View style={margin.topMd}>
            <Text style={[heading.h2, poppins.regular]}>Password</Text>
            <TextInput style={[login.field, poppins.light]}/>
            <StatusBar />
          </View>

          <View style={margin.topMd}>
            <Button title="Login" />
          </View>

          <View style={margin.topSm}>
            <Button title="Signup" color="red" />
          </View>
        </View>

        <View>
          <Text style={poppins.light}>A Beryl Labs application</Text>
        </View>
        
        <View>
            <Text>Home Bar with Icons</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 150
  },
});

export default Login;

