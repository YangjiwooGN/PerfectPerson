import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    //네비게이터를 통해 화면 실행
    <Navigation />
  );
}


