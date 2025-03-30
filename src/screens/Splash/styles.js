import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensure background is transparent
  },
  backgroundImage: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.2,
    zIndex: -1, // Send background image to the back
  },
  centeredImage: {
    width: 150,  // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: 'contain',
    borderRadius: 50,
  },
});

