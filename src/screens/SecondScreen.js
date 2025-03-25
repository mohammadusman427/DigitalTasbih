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

const SecondScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* My Second screen STARTING HERE */}
      <View
        style={{
          backgroundColor: 'white',
        }}>
        {/* Header with name and image of rabit */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 50,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                marginBottom: 90,
                padding: 13,
              }}>
              {`Dashboard`}
            </Text>
          </TouchableOpacity>

          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require('../images/rabbit.png')}
          />
        </View>

        {/* Blue container with card */}
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#0298db',
            borderRadius: 20,
            width: '80%',
            height: 170,
          }}>
          {/* card upper heading and image */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 22,
                marginTop: 8,
              }}>
              VISA
            </Text>
            <Image
              source={require('../images/crown.png')}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 60,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                width: 200,
                alignItems: 'flex-end',
              }}>
              **** **** **** ****
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginRight: 22,
                marginTop: 3,
              }}>
              0000
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              marginLeft: 28,
              
            }}>
            Dr Jonny Sins
          </Text>
        </View>

        {/* Transactin nd Weekly */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            //  backgroundColor: 'red',
            marginRight: 100,
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 20,
              marginLeft: 40,
            }}>
            Transaction
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 50,
              marginRight: 50,
            }}>
            Weekly
          </Text>
        </View>
        {/* Next (Icon+name=price) */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 80,
            marginTop: 60,
          }}>
          <Image
            source={require('../images/picicon.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
              }}>
              Darrell Wolfe
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 30,
              }}>
              Payment Recived
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              marginLeft: 90,
              color: 'blue',
            }}>
            +$250
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 80,
            marginTop: 35,
          }}>
          <Image
            source={require('../images/picicon.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
              }}>
              Darrell Wolfe
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 30,
              }}>
              Payment Recived
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              marginLeft: 90,
              color: 'orange',
            }}>
            -$250
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 80,
            marginTop: 35,
          }}>
          <Image
            source={require('../images/picicon.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
              }}>
              Darrell Wolfe
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 30,
              }}>
              Payment Recived
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              marginLeft: 90,
              color: 'orange',
            }}>
            -$100
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 80,
            marginTop: 35,
          }}>
          <Image
            source={require('../images/picicon.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
              }}>
              Darrell Wolfe
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 30,
              }}>
              Payment Recived
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              marginLeft: 90,
              color: 'blue',
            }}>
            +$550
          </Text>
        </View>
        {/* End ROW ICONS */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#f4f4f4',
            borderRadius: 10,
            marginTop: 100,
            height: 45,
            width: 350,
            elevation: 8,
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              height: 35,
              width: 35,
              borderRadius: 15,
            }}
          />
          <Image
            source={require('../images/message.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 20,
              borderRadius: 15,
            }}
          />
          <TouchableOpacity onPress={() => {
            navigation.navigate("ThirdScreen")
          }}> 
          <Image
            source={require('../images/butterfly.png')}
            style={{
              height: 50,
              width: 50,
              marginLeft: 20,
              borderRadius: 15,
              alignItems: 'center',
            }}
          />
          </TouchableOpacity>
          <Image
            source={require('../images/navigation.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 20,
              borderRadius: 15,
            }}
          />
          <Image
            source={require('../images/insan.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 20,
              borderRadius: 15,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#79c0f7'},
});

export default SecondScreen;
