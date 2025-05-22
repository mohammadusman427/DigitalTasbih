import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions, TextInput, Image, Text, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
import { styles } from '../Splash/styles';

const AzkarScreen = () => {
  return ( 
    <ScrollView contentContainerStyle={styles.container}>
      
  <View
  style={{
  flex: 1,  }}>
  
  
  <View 
 style={{
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 60,
  backgroundColor: '#ffede3',
  borderWidth: 2,
  borderRadius: 20,
  height: 80,
  width: 350,
  
  
}}>
<Text
style={{
  fontSize: 40,
  
}}>Azkar</Text>

 </View>
<View
  style={{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#ffede3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 25,
    width: 350,
    alignSelf: 'center',
  }}
>
  <View
    style={{
      flexDirection: 'row',
      // justifyContent: 'space-between',
      // width: '100%',
      // paddingHorizontal: 20,
    }}
  >

       <ImageBackground
    source={require('../imgs/background2.jpg')}
    style={{
      height: 200,
      width: "100%",
      borderRadius:50,
      resizeMode:'contain',
      
    }}
    imageStyle={{borderRadius:40}}
    >
     <View style={{
      flexDirection:'row',
      width:'90%',
      marginLeft:15,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 20,
      }}>
      <View style={{
        width:'30%',
        height:30,
        alignItems: 'center',}}>
        <Text style={{ color: 'white', fontSize: 25,}}>ٱلْحَمْدُ لِلَّٰهِ</Text>
      </View >
      <View style={{
        width:'30%',
        height:30,
        alignItems: 'center',}}>
           <Text style={{ color: 'white', fontSize: 25,}}>سبحان الله</Text>
      </View>
      <View style={{
        width:'30%',
        height:30,
        alignItems: 'center',}}>
           <Text style={{ color: 'white', fontSize: 25,}}>الله أكبر</Text>
      </View>
   
     </View>
    </ImageBackground>

  </View>
  <View
    style={{
      width: '90%',
      height: 1,
      backgroundColor: '#aaa',
      marginVertical: 10,
    }}
  />
  <Text
    style={{
      fontSize: 13,
      textAlign: 'center',
      color: '#333',
    }}
  >
    "Whoever says Subhan-Allah, Alhamdulillah, and Allahu Akbar 33 times after every prayer — 
    and completes 100 with 'La ilaha illallah wahdahu la sharika lahu...' — his sins will be forgiven, 
    even if they are as much as the foam of the sea."
(Muslim)
  </Text>
</View>
<View
  style={{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffede3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 25,
    width: 350,
    alignSelf: 'center',
  }}
>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold', }}>لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ</Text>
    
  </View>
  <View
    style={{
      width: '90%',
      height: 1,
      backgroundColor: '#aaa',
      marginVertical: 10,
    }}
  />
  <Text
    style={{
      fontSize: 14,
      textAlign: 'center',
      color: '#333',
    }}
  >
    Whoever says: “La ilaha illallah, wahdahu la sharika lahu…” 100 times, 
    it is as if he freed 10 slaves.
  </Text>
</View>
<View
  style={{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffede3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: 350,
    alignSelf: 'center',
  }}
>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Text
    style={{
      fontSize: 17,
      textAlign: 'center',
      color: '#333',
      fontWeight: 'condensedBold',
    }}
  >
    Bed Time Pray
  </Text>
    
    
  </View>
  <View
    style={{
      width: '90%',
      height: 1,
      backgroundColor: '#aaa',
      marginVertical: 10,
    }}
  />
   <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold', }}>اللَّهُمَّ بِسْمِكَ أَمُوتُ وَأَحْيَا</Text>
</View>


   

 </View>
 
 </ScrollView>

 );
};




const screenstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  
});

export default AzkarScreen;
