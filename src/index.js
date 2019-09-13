import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground

} from 'react-native';

import styles from '../stylesMain';

const App = () => {
  return (
    <View >
      <ImageBackground source={require('./assets/imgs/fundoSlide1.png')} style={styles.background}>
        <Text style={styles.bodyText}>Slide 1 APP react Native</Text>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.bodyText}> Hey meu mundo!! </Text>
      </View>      
      
    </View>
  );
};

export default App;
