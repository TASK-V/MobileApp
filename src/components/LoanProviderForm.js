// JavaScript source code
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









class LoanProviderForm extends Component<{}> {


constructor(props) {
    super(props);
    
    this.state = {
        UserId:'',
      usname:'',
	  name: '',
      email: '',
      password: '',
	  username:this.props.navigation.state.params.username,
      usererror:'',
      minage:'',
      minsalary:'',
      about:''

      

     
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

     const {name,minage,UserId,username,minsalary,about } = this.state;

    Alert.alert('before submit', `${name}`);
    

    var data ={"uid":UserId ,"name":name,"uname":username,"minage":minage,"minsalary":minsalary,"about":about}

   fetch('http://192.168.8.103:8080/api/auth/psignup', {
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
			  this.props.navigation.navigate('LP',{username:this.state.username});
				     //console.warn("2nd reg working for LProvider")
			  
            } else {
              this.setState({usererror:"User name already exist"});
              alert(this.state.usererror);
            }
          }).done();

 

    Alert.alert('after submit', `${name}`);

  

	 

  }




    render() {
        return (
		<ImageBackground source={{ uri: 'http://www.4usky.com/data/out/53/164470297-lavender-wallpapers.jpg' }} style={{ width: '100%', height: '100%' }}>
		<ScrollView>
            <View style={styles.container}>
             

				  

				 <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Name"
                    placeholderTextColor="#494949"
						onChangeText={(name) => this.setState({ name })}
                    keyboardType="default"

                />

				
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="minimum  age a investee expected to be"
                        placeholderTextColor="#494949"
						onChangeText={(minage) => this.setState({ minage })}
                        keyboardType="number"

                    />


                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="minimum salary"
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
					onChangeText={(minsalary) => this.setState({ minsalary })}
                />




<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="about ur previouse experience in this field "
                   // secureTextEntry={true}
                    placeholderTextColor="#494949"
					onChangeText={(about) => this.setState({ about })}
                />

                <TouchableOpacity style={styles.button}>
                    <Text
                       // onPress={() => this.props.navigation.navigate('LP')}
					    onPress={this.onReg.bind(this)}
                        style={styles.buttonText}>Login</Text>
                </TouchableOpacity>


            </View>
			</ScrollView>
			</ImageBackground>
        )
    }
}

export default LoanProviderForm;

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
    },

});// JavaScript source code

AppRegistry.registerComponent(
    'AwesomeProject',
    () => LoanProviderForm);