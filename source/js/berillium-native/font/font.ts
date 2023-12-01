import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
        'Poppins-Black': require('../../../assets/font/Poppins/Poppins-Black.ttf'),
        'Poppins-Regular': require('../../../assets/font/Poppins/Poppins-Regular.ttf'),
        'Poppins-Light': require('../../../assets/font/Poppins/Poppins-Light.ttf'),
        // Include other fonts here
    });
}

let poppins = {
    black: {
        fontFamily: 'Poppins-Black'
    },
    light: {
        fontFamily: 'Poppins-Light'
    },
    regular: {
        fontFamily: 'Poppins-Regular'
    }
}

loadFonts()
export default poppins
