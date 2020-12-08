import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}> what I'm thankful for</Text>
            <View style={styles.usernameContainer}>
                <Text style={styles.usernameText}>Username</Text>
                <TextInput style={styles.usernameInput} />
            </View>
            <Text style={styles.passwordText}>Password</Text>
            <TouchableOpacity
                onPress={() => alert('you click the login button')}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    usernameContainer: {

    },
    titleText: {
        color: 'brown',
        fontSize:35,
        marginBottom: 60,
    },
    usernameText: {
        color: 'blue',
        fontSize:20,
        marginBottom: 10,
        textAlign: 'left'
    },
    passwordText: {
        color: 'blue',
        fontSize:20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    button: {
        backgroundColor: 'gray'
    },
    usernameInput: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        width:200
    }
});
