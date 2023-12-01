import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import loadFonts from './js/berillium-native/font/font';
import  reds  from './js/berillium-native/config';
import poppins from './js/berillium-native/font/fonts';
import flat from './js/berillium-native/button/flat';


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        await loadFonts();
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading fonts", error);
        // Optionally, handle the error more gracefully
      }
    }

    load();
  }, []);

  if (!fontLoaded) {
    return <View style={styles.container}><ActivityIndicator size="large" /></View>;
  }


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
        <Text style={[poppins.heading]}>Quinoa Salad</Text>
          <TouchableOpacity style={[flat.bordered]}>
            <Text style={poppins.light}>Touche</Text>
          </TouchableOpacity>
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
