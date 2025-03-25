import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import Screen4 from './src/screens/Screen4';
import HomeScreen from './src/screens/Home';
import NameScreen from './src/screens/Name';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Splash'>
     <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
     <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
     <Stack.Screen
          name="Name"
          component={NameScreen}
        />
        {/* <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          // options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="Screen4" component={Screen4} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;