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
	 Alert,
	 ScrollView,
} from 'react-native';

class PopUpFormInvestee extends Component<{}> {

constructor(props) {
    super(props);
    
    this.state = {
        UserId:'',
      usname:'',
	  name: '',
      email: '',
      password: '',
	//  username:this.props.navigation.state.params.username,
	username:this.props.navigation.state.params.username,
      usererror:'',
      yearsofoccupation:'',
      salary:'',
      gname:'',
      gphonenumber:'',
      gjob:'',
      grelationship:''
     
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

    const {name,UserId,username,yearsofoccupation,salary,gname,gnic,gphonenumber,gjob,grelationship } = this.state;
    Alert.alert('before submit', `${name}`);
    
    var data ={"uid":UserId,"name":name,"uname":username,"yearsofoccupation":yearsofoccupation,
    "salary":salary,"gname":gname,"gnic":gnic,"gphonenumber":gphonenumber,"gjob":gjob,"grelationship":grelationship}
   

   fetch('http://192.168.8.103:8080/api/auth/irsignup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }) .then((res)=>{
            let status = res.status;
            if (status == 200) {
              //this.props.navigation.navigate
			  this.props.navigation.navigate('investee',{username:this.state.username});
				     //console.warn("2nd reg working for investee")
			  
            } else {
              this.setState({usererror:"User name already exist"});
              alert(this.state.usererror);
            }
          }).done();

 

    Alert.alert('after submit', `${name}`);

  

	 

  }
  
  /*

   onReg() {
    const {name,usname,email,password,UserId,username} = this.state;

    Alert.alert('before submit', `${name}`);
    

    var data ={"uid":8,"u_name":"thanussre4","name":"ThnAUKTV", "username":"KTV123","email":"KTV123@gmail.com","password":"123456"}

   fetch('http://192.168.56.1:8080/api/auth/psignup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
 
    Alert.alert('after submit', `${name}`);

  }

  */







    render() {
        return (
		    <ScrollView>
		<ImageBackground source={{ uri: 'https://fsa.zobj.net/crop.php?r=8JEQK1hzyrszFjBWtPy_kSvbYGb5BUL0dVQcEs7tBJ2h9B0W04Z6VY1K5HZLzanK77bb6Tj_pXGjRo9ZtMch8nepc-R_eYLLpr6LWzl8ZzHcFBr3EveNELJe4B53i0IGruZd5OSFU_DPh-7jzNAkko-POROlpfSggYhV8-vcR6JqBJbuahGNEk6rR88' }} style={{ width: '100%', height: '100%' }}>
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
                        placeholder="years of occupation"
                        placeholderTextColor="#494949"
						onChangeText={(yearsofoccupation) => this.setState({yearsofoccupation})}
                        keyboardType="default"

                    />


                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="salary"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
                    onChangeText={(salary) => this.setState({salary})}
                    keyboardType="default"
                />

<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="guaranter name"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
                    onChangeText={(gname) => this.setState({gname})}
                    keyboardType="default"
                />

                
<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="guaranter NIC"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
                    onChangeText={(gnic) => this.setState({gnic})}
                    keyboardType="default"
                />
         
                         
<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="guaranter Phone number"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
                    onChangeText={(gphonenumber) => this.setState({gphonenumber})}
                    keyboardType="default"
                />

                           
<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="guaranter job"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
                    onChangeText={(gjob) => this.setState({gjob})}
                    keyboardType="default"
                />

<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Relationship with the guranter"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
                    onChangeText={(grelationship) => this.setState({grelationship})}
                    keyboardType="default"
                />


                <TouchableOpacity style={styles.button}>
                    <Text
                         onPress={this.onReg.bind(this)}
                        style={styles.buttonText}>Register</Text>
                </TouchableOpacity>


            </View>
			</ImageBackground>
			    </ScrollView>
        )
    }
}

export default PopUpFormInvestee;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor:'#6A1B9A'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#494949',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#1976D2',
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
    () => PopUpFormInvestee);