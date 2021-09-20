import React from 'react';
import Navigator from './navigation/Navigator';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
