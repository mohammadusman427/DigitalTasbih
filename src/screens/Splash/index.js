// SplashScreen.js

import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import { styles } from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={{
          uri: 'https://img.freepik.com/free-vector/realistic-paper-style-abstract-ornamental-background_79603-2435.jpg',
        }}
        resizeMode={'cover'}
      />

      {/* Centered Image */}
      <Image
        style={styles.centeredImage}
        source={{
          uri: 'https://img.freepik.com/premium-vector/vector-circle-frame-from-tasbih-islam-prayer-beads-isolated-white_9834-3330.jpg',
        }}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default SplashScreen;
