import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../Store/userSlice';

const NameScreen = ({navigation}) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [name, setName] = useState('');
  const avatars = [
    {id: 1, source: require('../imgs/pics/man1.png')},
    {id: 2, source: require('../imgs/pics/mehndi.png')},
    {id: 3, source: require('../imgs/pics/man.png')},
    {id: 4, source: require('../imgs/pics/girl.png')},
    {id: 5, source: require('../imgs/pics/women3.png')},
    {id: 6, source: require('../imgs/pics/women2.png')},
    {id: 7, source: require('../imgs/pics/woman1.png')},
    {id: 8, source: require('../imgs/pics/women.png')},
  ];
  const dispatch = useDispatch();
  const handleContinue = () => {
    if (!name.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter your name',
        visibilityTime: 3000,
      });
      return;
    }
    if (!selectedAvatar) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please select an avatar',
        visibilityTime: 3000,
      });
      return;
    }
    dispatch(updateUser({name, avatar: selectedAvatar}));
    navigation.navigate('Home', {name, avatar: selectedAvatar});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>﷽</Text>
      </View>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Avatar Selection */}
      <Text style={styles.subtitle}>Select your avatar</Text>

      <View style={styles.avatarGrid}>
        {avatars.map(avatar => (
          <TouchableOpacity
            key={avatar.id}
            style={[
              styles.avatarContainer,
              selectedAvatar === avatar.id && styles.selectedAvatarContainer,
            ]}
            activeOpacity={0.7}
            onPress={() => setSelectedAvatar(avatar.id)}>
            <Image
              style={styles.avatar}
              source={avatar.source}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            (!name || !selectedAvatar) && styles.buttonDisabled,
          ]}
          onPress={handleContinue}
          activeOpacity={0.8}
          disabled={!name || !selectedAvatar}>
          <Text style={styles.buttonText}>Continue to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#4a6fa5',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 15,
    textAlign: 'center',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#eaeaea',
    padding: 5,
  },
  selectedAvatarContainer: {
    borderColor: '#4a6fa5',
    backgroundColor: '#f0f6ff',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4a6fa5',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#4a6fa510',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NameScreen;
