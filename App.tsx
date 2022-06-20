/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { BankAccount, Home } from './src/assets/svgImages';

const App = () => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ alignItems: 'center' }}>
          React Native
        </Text>
      
        <Home width={120} height={40}/>
      </View>
    </SafeAreaView>
  );
};


export default App;
