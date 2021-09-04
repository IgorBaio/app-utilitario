import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';


export default ImageFake = () => (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        left: 20
      }}
    />
  );

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain'
  }
});
