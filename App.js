/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from './screens/HomeScreen.js';
import  ChartScreen  from './screens/ChartScreen.js';
import  SettingsScreen  from './screens/SettingsScreen.js';
import { Provider } from 'react-redux';
import { store } from './store.js';
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component= {HomeScreen}/>
          <Tab.Screen name="Charts" component={ChartScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;

