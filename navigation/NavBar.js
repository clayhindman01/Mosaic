import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button} from 'react-native-paper';     
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Button 
                icon="home"
                style={ styles.buttonIconStyle }
                labelStyle={styles.iconStyle} 
                onPress={() => navigation.navigate("Mosaic")}
            />
            <Button 
                icon="camera" 
                style={ styles.buttonIconStyle }
                labelStyle={styles.iconStyle} 
                onPress={() => {
                    navigation.navigate("Camera")
                }}
            />
            <Button
                style={ styles.buttonIconStyle } 
                icon="account" 
                labelStyle={styles.iconStyle} 
                onPress={() => navigation.navigate("Account")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#00365a',
        width: '100%',
        height: 65,
        zIndex: 2,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconStyle: {
        fontSize: 40,
        color: '#ffe',
        flex: 1,
        paddingLeft: 10,
        marginHorizontal: -10,
    },
    buttonIconStyle: {
        textAlign: 'center',
        alignContent: 'center',
        height: 50,
    }
})