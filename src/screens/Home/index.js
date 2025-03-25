import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

// The HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>This is where you can add your content.</Text>

      <Button
        title="Go to Splash"
        onPress={() => navigation.navigate('Splash')}
      />
    </View>
  );
};

export default HomeScreen;
