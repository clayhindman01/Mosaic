import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button} from 'react-native-paper';     

export default function MainContainer() {
    return(
        <View style={styles.container}>
            <Button 
                icon="home"
                style={ styles.buttonIconStyle }
                labelStyle={styles.iconStyle} 
                onPress={() => {alert("Pressed Home Button")}}
            />
            <Button 
                icon="camera" 
                style={ styles.buttonIconStyle }
                labelStyle={styles.iconStyle} 
                onPress={() => {alert("Pressed Plus Button")}}
            />
            <Button
                style={ styles.buttonIconStyle } 
                icon="account" 
                labelStyle={styles.iconStyle} 
                onPress={() => {alert("Pressed Account Button")}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: 65,
        zIndex: 2,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: "2px",
        borderTopColor: "dodgerblue"
    },
    iconStyle: {
        fontSize: 40,
        color: 'dodgerblue',
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