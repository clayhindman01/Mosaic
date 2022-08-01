import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.headerLeft}>
            <Text style={styles.textStyle}>MOSAIC</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    headerMain: {
      width: '100%',
      backgroundColor: 'red'
    },
    headerLeft: {
      
    },
    textStyle: {
      fontSize: 15,
      marginBottom: 20
    }
  });