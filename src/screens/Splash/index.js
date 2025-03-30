// SplashScreen.js

import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import { styles } from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Name');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
      
        style={styles.backgroundImage}
        source={require('../imgs/backimage.jpeg')}
        // resizeMode={'cover'}
      />

      {/* Centered Image */}
      <Image
        style={styles.centeredImage}
        source={require('../imgs/tasbihlogo.png')}
        resizeMode={'contain'}
      />

    </View>
  );
};

export default SplashScreen;
