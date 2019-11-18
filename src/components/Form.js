// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

class Form extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="UserName"
                    placeholderTextColor="#494949"

                    keyboardType="email-address"

                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#494949"

                />
                <TouchableOpacity style={styles.button}>
                    <Text
                        onPress={() => this.props.navigation.navigate('Menu')}
                        style={styles.buttonText}>Login</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

export default Form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#212121'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgb(255, 255,255)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#494949',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#000000',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

});// JavaScript source code
