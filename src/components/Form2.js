// JavaScript source code
// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    AppRegistry

} from 'react-native';

import MultiText from '../components/MultiText'; 


 class Form2 extends Component{

    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="FirstName"
                        placeholderTextColor="#494949"

                        keyboardType="default"

                    />

                 
                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="LastName"
                            placeholderTextColor="#494949"

                            keyboardType="default"

                        />

                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="TelePhone Num"
                        placeholderTextColor="#494949"

                        keyboardType="phone-pad"

                    />



                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="NIC-No"
                        placeholderTextColor="#494949"

                        keyboardType="default"

                    />


          
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#494949"

                    keyboardType="email-address"

                />




                    <MultiText/>



                   
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="UserName"
                        placeholderTextColor="#494949"

                        keyboardType="default"

                    />



                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#494949"

                    />


                







                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Menu')}
                        style={styles.button}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>


                        </View>

            </ScrollView>
        )
    }
}


export default Form2 ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'
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

AppRegistry.registerComponent(
    'AwesomeProject',
    () => Form2);