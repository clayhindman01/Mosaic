
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function Mosaic() {
  return (
    <View style={styles.mosaic} >
        <Image 
          style={styles.image}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}} />
    </View>
  )
}

const styles = StyleSheet.create({
    mosaic: {
        // flex: 1,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        heigth: 100,
    },
    image: {
      // flex: 1,
      width: '100%',
      height: '100%',
    }
})