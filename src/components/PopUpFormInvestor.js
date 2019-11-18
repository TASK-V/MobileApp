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
	 AppRegistry,
	 ImageBackground,
	 ScrollView,
	 Alert
} from 'react-native';

class PopUpFormInvestor extends Component<{}> {


constructor(props) {
    super(props);
    
    this.state = {
        UserId:'',
        areas:'',
      name: '',
      minrate:'',
      about:'',
	//  username:this.props.navigation.state.params.username,
	username:this.props.navigation.state.params.username,
	  usererror:'',

     
    };
  }
  getUserid =  () => {
     
    const {username } = this.state;
    const url = 'http://192.168.8.103:8080/api/auth/user/username/' + username

    fetch(url, {
    method: 'GET',
    headers: {
       Accept: 'application/json',
      'Content-Type': 'application/json',
    },
   // body: JSON.stringify(data),
  }).then((response)=>response.json())
  .then((responseJson)=>{
	 
	      let acesstoken = responseJson.id;
		  //JSON.stringify(responseJson.accessToken);
	         // this.storeToken(acesstoken);
			 this.setState({
			 
			 
                UserId:acesstoken,

			 });

                if (this.state.UserId) {


				//this.removeValue();




				     //console.warn("got the uid")//Menu thibbe
                // this.props.navigation.navigate('Menu',{username: this.state.accesstoken});
				
                } else {

                    //console.warn("not got the uid")

                  //alert("username password missmatch");
                }






	  })
  .catch((error)=>{console.error(error); });
      





         }

   onReg() {

       this.getUserid();

     const {name,UserId,username,areas,minrate,about } = this.state;
     
   // Alert.alert('before submit', `${name}`);
    

    var data ={"uid":UserId,"name":name,"uname":username,"areas":areas,"minrate":minrate,"about":about}

   fetch('http://192.168.8.103:8080/api/auth/igsignup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((res)=>{
            let status = res.status;
            if (status == 200) {
              //this.props.navigation.navigate
			  this.props.navigation.navigate('investor',{username:this.state.username});
				     //console.warn("2nd reg working for investor")
			  
            } else {
              this.setState({usererror:"User name already exist"});
              alert(this.state.usererror);
            }
          }).done();



   // Alert.alert('after submit', `${name}`);

  }




  





    render() {
        return (
		
		<ImageBackground source={{ uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' }} style={{ width: '100%', height: '100%' }}>
		<ScrollView>
            <View style={styles.container}>
 

				

				 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Name"
                    placeholderTextColor="#494949"
						onChangeText={(name) => this.setState({name})}
                    keyboardType="default"

                />
                    <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Interested Areas"
                    placeholderTextColor="#494949"
					 onChangeText={(areas) => this.setState({areas})}
                    keyboardType="default"

                />

				
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Minimum Rate"
                        placeholderTextColor="#494949"
						onChangeText={(minrate) => this.setState({minrate})}
                        keyboardType="default"

                    />


                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="about"
                    //secureTextEntry={true}
                    placeholderTextColor="#494949"
					onChangeText={(about) => this.setState({about})}

                />
                <TouchableOpacity style={styles.button}>
                    <Text
					 onPress={this.onReg.bind(this)}
                        //onPress={() => this.props.navigation.navigate('investor')}

                        style={styles.buttonText}>Register</Text>
                </TouchableOpacity>


            </View>
			</ScrollView>
			</ImageBackground>
			
        )
    }
}

export default PopUpFormInvestor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor:'#6A1B9A'
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
        backgroundColor: '#EA80FC',
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
    () => PopUpFormInvestor);