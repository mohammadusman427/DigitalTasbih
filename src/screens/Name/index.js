import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { styles } from './styles';

// The HomeScreen component
const NameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Name Screen!</Text>
      <Text style={styles.subtitle}>This is where you can add your content.</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default NameScreen;
