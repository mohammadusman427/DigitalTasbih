import React from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const FirstScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* MY FIRST SCREEN */}
      <Image
        style={{
          height: 200,
          width: 200,
          resizeMode: 'contain',
          marginTop: 35,
          alignSelf: 'center',
          backgroundColor: '#79c0f7',
        }}
        source={require('../images/look.png')}
      />
      <Text
        style={{
          flexDirection: 'row',
          fontSize: 15,
          alignSelf: 'center',
          marginTop: -30,
        }}>
        ⚡️Save Energy, Get New Look⚡️
      </Text>
      <View
        style={{
          borderWidth: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 60,
          height: 50,
          marginRight: 40,
          marginLeft: 40,
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 8,
        }}>
        <Image
          source={require('../images/contact.png')}
          style={{
            width: 30,
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />
        <TextInput
          placeholder="Username"
          style={{
            width: 100,
            height: 48,
            color: 'black',
            fontSize: 18,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 32,
          height: 50,
          marginRight: 40,
          marginLeft: 40,
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 8,
        }}>
        <Image
          source={require('../images/comment.png')}
          style={{
            width: 30,
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />

        <TextInput
          placeholder="Password"
          style={{
            width: 100,
            height: 48,
            color: 'black',
            fontSize: 18,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 32,
          height: 50,
          marginRight: 40,
          marginLeft: 40,
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 8,
        }}>
        <Image
          source={require('../images/phone.png')}
          style={{
            width: 30,
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: 13,
          }}
        />
        <TextInput
          placeholder="Phone"
          style={{
            width: 100,
            height: 48,
            color: 'black',
            fontSize: 18,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 32,
          marginRight: 40,
          marginLeft: 40,
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 8,
        }}>
        <Image
          source={require('../images/dot.png')}
          style={{
            width: 30,
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: 13,
          }}
        />
        <TextInput
          placeholder="Cheat Code"
          style={{
            width: 100,
            height: 50,
            color: 'black',
            fontSize: 18,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 32,
          marginRight: 40,
          marginLeft: 40,
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 8,
        }}>
        <Image
          source={require('../images/lock.png')}
          style={{
            width: 30,
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: 13,
          }}
        />

        <TextInput
          placeholder="Password"
          style={{
            width: 100,
            height: 50,
            color: 'black',
            fontSize: 18,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: 13,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          margin: 10,
          marginTop: 40,
          backgroundColor: '#ededed',
          borderRadius: 15,
          elevation: 8,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SecondScreen')
          }} // Fixed Alert usage
        >
          <Text
            style={{
              height: 40,
              width: 130,
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: '#black',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#79c0f7'},
});

export default FirstScreen;
