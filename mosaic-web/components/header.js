import React, { useState } from "react";
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationRouteContext, useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements';

export default function Header(props) {
    const navigator = useNavigation();

    return(
        // Mosaic Text
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigator.navigate("Mosaic")}>
                    <Text style={styles.text}>Mosaic</Text>
                </TouchableOpacity>

                {/* Bell Icon */}
                <TouchableOpacity onPress={() => navigator.navigate("Account")}>
                    <Icon
                    style={props.includeImage? styles.icon: styles.noIcon}
                    name="bell-outline"
                    type="material-community"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => console.log("Pressed Account")}>
                <Image 
                    style={styles.image}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        backgroundColor: '#1B1E28',
        height: 250,
        alignItems: "center"
    },
    row: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,

    },
    text: {
        color: "#fff",
        marginLeft: 25,
        marginTop: 5,
        fontSize: 28,
        fontWeight: 'bold',
    },
    noIcon: {
        display: "none"
    },
    icon: {
        marginRight: 25,
        marginTop: 5,
        width: 40,
        height: 40,
        marginRight: 10,
    }
})