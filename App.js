import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Button } from 'react-native';
import Login from './app/Login';

export default function App() {

  const pressBtn = () => {
    alert("Hello!");
  }

  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === "android" ? 10 : 0
  },
});
