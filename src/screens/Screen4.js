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

const Screen4 = ({navigation}) => {
  return (
    <ScrollView>
        <View
          style={{
          height: 200,
          width: '100%',
          backgroundColor: '#1C4B94',
          borderRadius: 30,
          marginTop: -20,
          
         }}>
          <View
          style={{
            flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 70,
          // backgroundColor: 'black',
          }}>
          
            <Text
           style={{
           fontSize: 25,
           color: 'white',
           fontWeight: 'bold',
           marginLeft: 35,
           
         }}>Welcome Daniel</Text>
         <Pressable
            onPress={() => {
            navigation.goBack();}}>
         <Image
         source={require('../images/Bell.png')}
         style={{
          height: 35,
          width: 35,
          marginRight: 30,
          marginTop: 30,
         }}>
          
         </Image>

        </Pressable>
         </View>

          <View
          style={{
            

          }}>
            <Text
         style={{
          fontSize: 14,
          marginTop: -10,
          color: 'white',
          marginLeft: 35,
          
        
         }}>Your journey to a vibrant and supportive</Text>
         <Text
         style={{
          fontSize: 14,
          marginLeft: 35,
          color: 'white',
         }}>network begins here.</Text>

       </View>
     </View>
     <View
      style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,}}>

     <View
     style={{
      height: 190,
      width: 190,
      backgroundColor: '#1C4B94',
      marginLeft: 10,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
     }}>
      
      <Image
      source={require('../images/gyr.png')}
      style={{
        height: 75,
        width: 75,
      }}>
      </Image>
      <Text
      style={{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      }}>Contacts</Text>

      </View>
      <View
      style={{
        height: 190,
        width: 190,
        backgroundColor: '#dd1888',
        marginRight: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Image
        source={require('../images/documents.png')}
        style={{
          marginTop: 10,
          height: 70,
          width: 70,
        }}>

        </Image>
        <Text
      style={{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      }}>Personal</Text>
      <Text
      style={{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: -5,
      }}>Documents</Text>
      </View>
      </View>

      <View
      style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,}}>

     <View
     style={{
      height: 190,
      width: 190,
      backgroundColor: '#cbde00',
      marginLeft: 10,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
     }}>
      
      <Image
      source={require('../images/resources.png')}
      style={{
        height: 75,
        width: 75,
      }}>
      </Image>
      <Text
      style={{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      }}>Resources</Text>


      </View>
      <View
      style={{
        height: 190,
        width: 190,
        backgroundColor: '#364459',
        marginRight: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Image
        source={require('../images/dailyfeeds.png')}
        style={{
          height: 70,
          width: 70,
        }}>

        </Image>
        <Text
      style={{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      }}>Daily Feeds</Text>
      </View>
      
      
     
     </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#79c0f7'},
});

export default Screen4;
