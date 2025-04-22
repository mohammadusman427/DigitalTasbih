import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://maps.google.com/'}}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
