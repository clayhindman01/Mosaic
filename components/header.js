import React, { useState } from "react";
import firebase from '../database/firebase';
import {SafeAreaView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationRouteContext, useNavigation } from "@react-navigation/native";

export default function Header(props) {
    const user = firebase.auth().currentUser
    const navigator = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigator.navigate("Mosaic")}>
                <Text style={styles.text}>Mosaic</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigator.navigate("Account")}>
                <Image 
                    style={props.includeImage? styles.image: styles.noImage}
                    source={{uri: user.photoURL}}
                />
                
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#2b3650',
        height: 100,
        alignItems: "center"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 10,
    },
    text: {
        color: "#fff",
        marginLeft: 15,
        fontSize: 24,
        fontWeight: 'bold',
    },
    noImage: {
        display: "none"
    }
})