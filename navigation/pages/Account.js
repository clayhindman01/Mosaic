import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../../components/header';
import firebase from '../../database/firebase'
import NavBar from '../NavBar';

export default function Account() {

    const user = firebase.auth().currentUser

    return(
        <>
        <Header includeImage={false} />
        <View style={styles.container} >
            <Image 
                style={styles.image}
                source={{uri: user.photoURL}}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{user.displayName}</Text>
                <Text style={styles.text}>{user.email}</Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 35,
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 100,
        borderColor: "gray",
        borderWidth: 1,
    },
    textContainer: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
    }
})