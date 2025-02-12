import { useScrollToTop } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TouchableHighlight} from 'react-native';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';

export default function Account() {

    const [editMode, setEditMode] = useState(false)
    const navigation = useNavigation();

    return(
        <>
        <Header includeImage={false} />
        <Text 
                style={styles.editText}
                onPress={() => setEditMode(!editMode)}
            >{editMode? "Save": "Edit"}</Text>
        <View style={styles.container} >
            <TouchableHighlight style={{borderRadius: 100}} onPress={editMode? updatePicture: null} >
                <Image
                    style={styles.image}
                    source={{uri: user.photoURL}}
                />
            </TouchableHighlight >
            <View style={styles.textContainer}>
                <Text style={styles.text}>{user.displayName}</Text>
                <Text style={styles.text}>{user.email}</Text>
                <Button
                    color="#3740FE"
                    title="Logout"
                    onPress={signOut}
                />
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
    ,
    editText: {
        textAlign: 'right',
        padding: 20,
        fontSize: 20
    }
})