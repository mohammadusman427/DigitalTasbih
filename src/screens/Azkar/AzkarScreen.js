import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './AzkarScreen.styles';
import { azkarContent } from './AzkarScreen.text';

const cardColors = [
  {
    backgroundColor: '#F0FFF4',
    borderColor: '#38A169',
    dividerColor: '#68D391',
    textColor: '#2F855A',
  },
  {
    backgroundColor: '#EBF8FF',
    borderColor: '#3182CE',
    dividerColor: '#63B3ED',
    textColor: '#2C5282',
  },
  {
    backgroundColor: '#FFFAF0',
    borderColor: '#DD6B20',
    dividerColor: '#F6AD55',
    textColor: '#C05621',
  },
  {
    backgroundColor: '#FAF5FF',
    borderColor: '#805AD5',
    dividerColor: '#B794F4',
    textColor: '#553C9A',
  },
];

const AzkarScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../../images/back.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>{azkarContent.title}</Text>
          </View>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {azkarContent.cards.map((card, index) => (
            <View 
              key={index} 
              style={[
                styles.cardContainer,
                {
                  backgroundColor: cardColors[index].backgroundColor,
                  borderColor: cardColors[index].borderColor,
                }
              ]}>
              <Image
                source={card.image}
                style={styles.cardImage}
              />
              <View 
                style={[
                  styles.divider,
                  { backgroundColor: cardColors[index].dividerColor }
                ]} 
              />
              <Text 
                style={[
                  styles.cardText,
                  { color: cardColors[index].textColor }
                ]}>
                {card.text}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

export default AzkarScreen;
