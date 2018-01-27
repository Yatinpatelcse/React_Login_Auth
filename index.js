// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Auth'} />
  </View>
);

// Render it to device
AppRegistry.registerComponent('auth', () => App);
