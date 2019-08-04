import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayArea from './components/PlayArea';

export default function App() {
  return (
    <View style={styles.container}>
      <PlayArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
});
