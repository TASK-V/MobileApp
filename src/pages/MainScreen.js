// JavaScript source code
// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,

} from 'react-native';

export default class MainScreen extends Component {
   
    static navigationOptions = {
        title: '',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#0000',
        headerRight:null
      };


    render() {
        return (
            <ImageBackground source={{ uri: 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/SZ-DH8n8fjdh9r2ql/storyblocks-writing-note-showing-profit-loss-business-photo-showcasing-financial-year-end-account-contains-total-revenues-and-expensesman-creating-on-yellow-paper-hand-holding-red-black-pens-wooden-table_Bge_BVmAfX_SB_PM.jpg' }} style={{flex:1}}>
            <View style={styles.container}>
                


                <Text style={styles.logoText}>Welcome to WePay </Text>
                <Text style={styles.logoText}>Latest loan investment services provider</Text>
                 
		  <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('login')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                
		  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Sign_Up')}>
                    <Text style={styles.buttonText}>
                        SignUp
                    </Text>
                </TouchableOpacity>
          
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#212121'
    },
    logoText: {
        fontWeight: '500',
        marginVertical: 10,
        fontSize: 18,
        color: '#ffff'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,

    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
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


});