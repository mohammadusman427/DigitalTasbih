import React, {useState, useRef} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ThirdScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const refRBSheet = useRef();
  return (
    <ImageBackground style={{flex: 1}} source={require('../images/bg.jpg')}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{
          opacity: 0.8,
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../images/whiteback.png')}
              style={{
                height: 25,
                width: 25,
                marginLeft: 30,
              }}
            />
          </Pressable>
          <TouchableOpacity onPress={() => {refRBSheet.current.open()}}>
            <Image
              source={require('../images/whitedot.png')}
              style={{
                height: 25,
                width: 25,
                marginRight: 30,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}>
            <View
              style={{
                backgroundColor: '#b185ff',
                height: 220,
                width: 170,
                borderRadius: 15,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1,
              }}>
              <Image
                source={require('../images/tick.png')}
                style={{
                  height: 75,
                  width: 75,
                }}
              />
            </View>
            </Pressable>
          <TouchableOpacity
            onPress={() => {
              setModalVisible2(true);
            }}>
            <View
              style={{
                backgroundColor: '#ff9a96',
                height: 220,
                width: 170,
                borderRadius: 15,
                marginRight: 20,
                alignItems: 'center',
                opacity: 1,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/shoes.png')}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
          onPress={()=>{
            setModalVisible3(true);
          }}>
            <View
              style={{
                opacity: 1,
                backgroundColor: '#f2cf41',
                height: 220,
                width: 170,
                borderRadius: 15,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/eyeglasses.png')}
                style={{
                  height: 75,
                  width: 75,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{setModalVisible4(true);
          }}>
            <View
              style={{
                opacity: 1,
                backgroundColor: '#73ceff',
                height: 220,
                width: 170,
                borderRadius: 15,
                marginRight: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/fork.png')}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
          onPress={()=>{setModalVisible5(true);

          }}>
            <View
              style={{
                backgroundColor: '#65db98',
                height: 220,
                opacity: 1,
                width: 170,
                borderRadius: 15,
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/file.png')}
                style={{
                  height: 55,
                  width: 55,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() =>{setModalVisible6(true);}}>
            <View
              style={{
                backgroundColor: '#69dbce',
                opacity: 1,
                height: 220,
                width: 170,
                borderRadius: 15,
                marginRight: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/book.png')}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView6}>
              <Text style={styles.modalText}>Hello !</Text>
              <View
              style={{
                 alignItems: 'center',
              }}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center',   
            }}>We love react. It's the best mobile UI framework. 
            We are gonna be the best developers. Learn react everyday</Text>
              </View>
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,

              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  marginTop: 50,
                  padding: 8,
                }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  padding: 8,
                  
                }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        <Modal animationType="fade" transparent={true} visible={modalVisible2}>
          <View style={styles.centeredView}>
            <View style={styles.modalView6}>
              <Text style={styles.modalText}>Hello !</Text>
              <View
              style={{
                 alignItems: 'center',
              }}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center',   
            }}>We love react. It's the best mobile UI framework. 
            We are gonna be the best developers. Learn react everyday</Text>
              </View>
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,

              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  marginTop: 50,
                  padding: 8,
                }}
                onPress={() => {
                  setModalVisible2(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  padding: 8,
                  
                }}
                onPress={() => {
                  setModalVisible2(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        <Modal animationType="fade" transparent={true} visible={modalVisible3}>
          <View style={styles.centeredView}>
            <View style={styles.modalView6}>
              <Text style={styles.modalText}>Hello !</Text>
              <View
              style={{
                 alignItems: 'center',
              }}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center',   
            }}>We love react. It's the best mobile UI framework. 
            We are gonna be the best developers. Learn react everyday</Text>
              </View>
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,

              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  marginTop: 50,
                  padding: 8,
                }}
                onPress={() => {
                  setModalVisible3(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  padding: 8,
                  
                }}
                onPress={() => {
                  setModalVisible3(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        <Modal animationType="fade" transparent={true} visible={modalVisible4}>
          <View style={styles.centeredView}>
            <View style={styles.modalView6}>
              <Text style={styles.modalText}>Hello !</Text>
              <View
              style={{
                 alignItems: 'center',
              }}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center',   
            }}>We love react. It's the best mobile UI framework. 
            We are gonna be the best developers. Learn react everyday</Text>
              </View>
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,

              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  marginTop: 50,
                  padding: 8,
                }}
                onPress={() => {
                  setModalVisible4(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  padding: 8,
                  
                }}
                onPress={() => {
                  setModalVisible4(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        <Modal animationType="fade" transparent={true} visible={modalVisible5}>
          <View style={styles.centeredView}>
            <View style={styles.modalView6}>
              <Text style={styles.modalText}>Hello !</Text>
              <View
              style={{
                 alignItems: 'center',
              }}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center',   
            }}>We love react. It's the best mobile UI framework. 
            We are gonna be the best developers. Learn react everyday</Text>
              </View>
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,

              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  marginTop: 50,
                  padding: 8,
                }}
                onPress={() => {
                  setModalVisible5(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  padding: 8,
                  
                }}
                onPress={() => {
                  setModalVisible5(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        <Modal animationType="fade" transparent={true} visible={modalVisible6}>
          <View style={styles.centeredView}>
            <View style={styles.modalView6}>
              <Text style={styles.modalText}>Hello !</Text>
              <View
              style={{
                 alignItems: 'center',
              }}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center',   
            }}>We love react. It's the best mobile UI framework. 
            We are gonna be the best developers. Learn react everyday</Text>
              </View>
              <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,

              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  marginTop: 50,
                  padding: 8,
                }}
                onPress={() => {
                  setModalVisible6(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'gray',
                  width: '40%',
                  borderRadius: 15,
                  padding: 8,
                  
                }}
                onPress={() => {
                  setModalVisible6(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        
        

        <RBSheet
          ref={refRBSheet}
          useNativeDriver={true}
          height={400}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}
          customModalProps={{
            animationType: 'slide',
            statusBarTranslucent: true,
          }}
          customAvoidingViewProps={{
            enabled: false,
          }}>
            <TouchableOpacity onPress={() => {
            navigation.navigate("Screen4")
          }}>
          <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
            <Text
            style={{
              fontSize: 30,
            }}>Hello World !</Text>
            </View>
            </TouchableOpacity>
            {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../images/whiteback.png')}
              style={{
                height: 25,
                width: 25,
                marginLeft: 30,
                backgroundColor: 'black'
              }}
            />
          </TouchableOpacity>
          <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text
            style={{
              fontSize: 20,
            }}>Create</Text>
          </View>
          <TouchableOpacity onPress={() => {refRBSheet.current.open()}}>
            <Image
              source={require('../images/whitedot.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 30,
                backgroundColor: 'black'
              }}
            />
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            justifyContent: 'flex-start',
            // alignItems: 'center',
            marginTop: 30,
            marginLeft: 25,
          
          }}>
            <Text
            style={{
              fontSize: 20,
            }}>Create</Text>
          </View>
        <Pressable
        onPress={()=> launchCamera(true)}>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: "center",
          marginTop: 20,
          marginLeft: 28
        }}>
          
          <Image
          source={require('../images/camera.png')}
          style={{
           height: 25,
           width: 25,
           marginRight: 20,
          }}/>
          <Text
          style={{
            fontSize: 14,
          }}>Take Photo</Text>
        </View>
        </Pressable>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: "center",
          marginTop: 20,
          marginLeft: 28
        }}>
          <Image
          source={require('../images/imagee.png')}
          style={{
           height: 25,
           width: 25,
           marginRight: 20,
          }}/>
          <Text
          style={{
            fontSize: 14,
          }}>Chose Image</Text>
        </View>
        <View 
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 40,
            marginLeft: 40,
            marginTop: 50,
            borderRadius: 7,
            backgroundColor:'#95b0ed',
            
            
        }}>
          <TextInput
          placeholder='Username'
          style={{
               height: 40,
               width: 275,
               
               
          }}>

          </TextInput>

        </View>
        <View 
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 40,
            marginLeft: 40,
            marginTop: 20,
            borderRadius: 7,
            backgroundColor:'#95b0ed',
            
            
        }}>
          <TextInput
          placeholder='Password'
          style={{
               height: 40,
               width: 275,
               
               
          }}>

          </TextInput>

        </View>
        
            {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <View
              style={{
                opacity: 1,
                backgroundColor: '#f2cf41',
                height: 220,
                width: 170,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/eyeglasses.png')}
                style={{
                  height: 75,
                  width: 75,
                }}
              />
              
            </View>
          </TouchableOpacity>
          </View> */}

          
         </RBSheet>
        
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
  },
  modalView6: {
    justifyContent: 'center',
    backgroundColor: '#daede9',
    borderRadius: 10,
    height: 200,
    width: '80%',
    // padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalView6: {
    justifyContent: 'center',
    backgroundColor: '#daede9',
    borderRadius: 40,
    height: 400,
    width: '80%',
    padding: 25,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '500',
  },
});

export default ThirdScreen;
