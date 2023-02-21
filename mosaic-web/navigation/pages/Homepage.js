// components/dashboard.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight, ScrollView } from 'react-native';
import Header from '../../components/header';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Mosaic from '../../components/mosaic';

export default function Dashboard() {
  const [document, setDocument] = useState([])
  const [uri, setUri] = useState('https://cdn.pixabay.com/photo/2022/07/17/19/40/animal-7328225_960_720.jpg')

  return (
    <>
      <Header includeImage={true} />
        <View style={styles.container}>
        <LinearGradient
          colors={['lightgray', '#d6dbd2']}
          style={styles.gradient}
        >
          <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
          <Mosaic uri={uri} todaysMosaic={true} complete={false}></Mosaic>
          </ScrollView>
          </LinearGradient>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingTop: 15,
  },
});