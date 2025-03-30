import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// The HomeScreen component
const NameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>﷽</Text>
      <View
      style={{
        justifyContent: 'space-between', flexDirection: 'row',}}>
     <TouchableOpacity>
      <Image
      style={styles.images}
      source={require('../imgs/pics/man1.png')}></Image> </TouchableOpacity>
     <TouchableOpacity>
      <Image
      style={styles.images2}
      source={require('../imgs/pics/mehndi.png')}></Image> </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.images3}
      source={require('../imgs/pics/man.png')}></Image> </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.images4}
      source={require('../imgs/pics/girl.png')}></Image> </TouchableOpacity>
      </View>
      <View
      style= {{
        justifyContent: 'space-between', flexDirection: 'row',}}>
      <TouchableOpacity>
      <Image
      style={styles.images5}
      source={require('../imgs/pics/women3.png')}></Image> </TouchableOpacity>
     <TouchableOpacity>
      <Image
      style={styles.images6}
      source={require('../imgs/pics/women2.png')}></Image> </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.images7}
      source={require('../imgs/pics/woman1.png')}></Image> </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.images8}
      source={require('../imgs/pics/women.png')}></Image> </TouchableOpacity>
      
      </View>
      <TextInput
      style={styles.textinput}>Your Name</TextInput>
      
      <Text style={styles.subtitle}>Select your avatar</Text>

      <View
      style={{justifyContent: 'center', flex: 1,}}>
       <Button
        title="Home"
        onPress={() => navigation.navigate('Home')} 
        
      />
      </View>
    </View>
  );
};

export default NameScreen;
