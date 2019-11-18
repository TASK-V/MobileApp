// JavaScript source code
// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    AppRegistry,
	ImageBackground,
	Alert,
	Button,
	ActivityIndicator,


} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';


//const ACCESS_TOKEN = '';

 class Login extends Component<{}> {

   
  
  constructor(props) {
        super(props);

		
        this.state = {
            username:"",
            password:"",
            errors: "",
          accesstoken:null,
            fogot:""
        }
    }

    getToken = async () => {
        try {
            var token = await AsyncStorage.getItem('token');
           // //console.warn(token)

        } catch (error) {
            alert('mona magulak da token eka enne na');
        }
      }

    async storeToken(accessToken) {
        try {
         await AsyncStorage.setItem("token",accessToken);
           // console.log(JSON.parse(accessToken).token);
           this.getToken();
           console.log("Login storeToken method");
        } catch (error) {
            console.log("Something went wrong")
        }
    }

	removeValue = async () => {
  try {
    //await AsyncStorage.removeItem('token')
	//this.storeToken();

	 this.setState({
			 
			  username:"",
            password:"",
            errors: "",

			 });




	 //this.getToken();
  } catch(e) {
    console.log("not removed");
  }

  console.log('Done.')
}


    require(){
        if((this.state.username)&&(this.state.password)){
            return 1;
        }else{
            return 0;
        }
    }

    async onLoginPressed() {
        try {
            if(this.require()){


	    const { username, password } = this.state;
    var data ={"username":username,
    "password": password }
  
   fetch('http://192.168.8.103:8080/api/auth/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
        
        data),
  }).then((response)=>response.json())
  .then((responseJson)=>{
	 
	      let acesstoken = responseJson.username;
		  //JSON.stringify(responseJson.accessToken);
	          this.storeToken(acesstoken);
			 this.setState({
			 
			 
			 accesstoken:acesstoken,

			 });

                if (this.state.accesstoken) {


				this.removeValue();




				     //console.warn("logged in")//Menu thibbe
                 this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
				
                } else {



                  alert("username password missmatch");
                }






	  })
  .catch((error)=>{console.error(error); });
      




         }else{
                alert("All fields required");
                //this.props.navigation.navigate("Login");
            }
        } catch (error) {
            
            this.setState({ errors: "Invalid username or password" });
            console.log("error: " + error);
        }
    }
  
  




  /*CheckLogin()
 {
 const {username, password  } = this.state
 if( username == 'admin' &&  password == 'admin' )
 {
   ////console.warn('Login is oky')
   this.props.navigation.navigate('Menu')
   
 }
 
 else {
 	
	 Alert.alert('Error','Username/Password mismatch',[{
	 text:'okay'
	 }])
 }
 

 }*/






    render() {
        return (

          <ImageBackground source={{ uri: 'https://w-dog.net/wallpapers/13/14/297187961978249/paris-eiffel-tower-bokeh.jpg' }} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>

                <Logo />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="UserName"
                    placeholderTextColor="#494949"
					   value={this.state.username}
					         //onChangeText={(val) => this.setState({ username: val })} 
                   onChangeText={(username) => this.setState({ username })}
                    keyboardType="email-address"

                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
					//onChangeText={(text) => this.setState({password: text})}
					//onChangeText={(val) => this.setState({ password: val })}
					          value={this.state.password}
                     onChangeText={(password) => this.setState({ password })}
                    placeholderTextColor="#494949"

                />
            

		  <TouchableOpacity style={styles.button} onPress={this.onLoginPressed.bind(this)}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>



	




					<Text>
					{this.state.error}
					</Text>

		  

		 

				
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                <TouchableOpacity><Text style={styles.signupButton}
                    onPress={() => this.props.navigation.navigate('Sign_Up')}
                >Signup</Text></TouchableOpacity>
                </View>

				</ImageBackground>
           
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
          //backgroundColor: '#212121'
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

AppRegistry.registerComponent(
    'AwesomeProject',
    () => Login);