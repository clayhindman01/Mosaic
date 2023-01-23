import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

export default function Canvas({ route, navigation }) {
    const {uri} = route.params
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)
    Image.getSize(uri, (width, height) => { 
        setWidth(width)
        setHeight(height) 
    });
    console.log("Width: " + width + "\nHeight: " +  height)
    return(
        <>
        <View style={styles.container}>
            
            <ScrollView 
                minimumZoomScale={1}
                maximumZoomScale={5}
                showsVerticalScrollIndicator={false}
                // style={{height: '100%'}}
                >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image 
                        source={{uri: uri}}
                        style={{
                            width: width, 
                            height: height, 
                            minWidth: Dimensions.get('window').width, 
                            minHeight: Dimensions.get('window').height, 
                        }}
                    />
                </ScrollView>
            </ScrollView>

            <View style={{position: 'absolute', bottom: 30, left: ((Dimensions.get('screen').width/2)-30)}}>
                <Icon
                    style={styles.camera}
                    name="camera"
                    type="material-community"
                    color="#2b3650"
                    size={65}
                    onPress={() => navigation.navigate("Camera")}
                />
            </View>
            <View style={{position: 'absolute', top: 0, left: 0}}>
                <Icon 
                    style={styles.goBack}
                    name="arrow-left"
                    type="material-community"
                    color="#2b3650"
                    size={50}
                    onPress={() => navigation.goBack()}
                />  
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    },
    goBack: {
        marginVertical: 50,
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },
})