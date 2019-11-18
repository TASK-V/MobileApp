import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    ImageBackground,
    AsyncStorage,ActivityIndicator,
    Button,
    TextInput,
    Alert
  
} from 'react-native';
import {Container, Content, Card, CardItem,Left, Body} from 'native-base'

import Modal from "react-native-modal";
import { ScrollView } from 'react-native-gesture-handler';

export default class Usermessages extends Component {

    static navigationOptions = {
        title: 'Messages',
        headerStyle: {
         // backgroundColor: 'blue',
        },
        headerTintColor: 'crimson',
        headerRight:null
      };

      constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          from:'',
          to:'',
          message:'',
          dataSource: [],
          notification: "0",
          active: false,
          accesstoken: '',
          notification_color:'blue',
          duration:'',
          last_update:'',
          numOfNotifications:'',
          test:'ssss',
          username:this.props.navigation.state.params.username,
         loanreceiveruname:'',
         sum:0,
         isModalVisible: false,
         usererror:'',
         receiverstatus:"",
         senderstatus:"Accepted",
         date:''

        }
      }

    componentDidMount() {
        this.loadData();
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
          //Setting the value of the date time
          date:
            date + '/' + month + '/' + year ,
        });

         }

    loadData() {
       // //console.warn("this is inside the load function ")
       const {username} = this.state;
          
        const url = 'http://192.168.8.103:8080/api/auth/usermess/touname/'+ username
        fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                    numOfNotifications:responseJson.length,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

 




    testmethod(item){
           
        
        
        ////console.warn(item.name);
        return item;
    }

    sendMessage = () =>{

        const {from,to,message,username,date} = this.state;

        //Alert.alert('before submit', `${name}`);
         
    
        var data ={"fromuname":from ,"touname":to,"uname":username,"name":message,"date":date}
    
       fetch('http://192.168.8.103:8080/api/auth/usermess', {
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
                  //this.props.navigation.navigate('LP');
                         //console.warn("working")
                         alert("the message has been submitted");
    
                         this.setState({ to:'',
                                       from:'',
                                       message:'',
                                       
                                    usererror:'',
                                
                                        });
    
                                       
                  
                   // this.props.navigation.navigate('LP');
    
                     
                  
                } else {
                  this.setState({usererror:"not working"});
                  alert(this.state.usererror);
    
                }
              }).done();
    
     
    
        //Alert.alert('after submit', `${name}`);
    


    }
   
//DeleteUserReq = (id) => {
      // //console.warn(id);
    //var xid = JSON.stringify(id);
   // var url = 'http://192.168.8.103:8080/api/auth//usercreq/delete/'
 
    //var str2 = new String(this.id)
   // const url2 = url.concat(id)
       
//fetch(url2, {
/* method: 'DELETE',
 headers: {
   Accept: 'application/json',
   'Content-Type': 'application/json',
 },
 //body: JSON.stringify(data),
})
.then((response)=>response.json())
.then((responseJson)=>{
  
 let acesstoken =JSON.stringify(responseJson);
 alert(acesstoken);
})
*/



//}   





 



   
/*toggleModal2open = () => {



    this.setState({
      
      isModalVisible: true
    });

	//this.props.navigation.navigate('Sign_Up');
  };


toggleModal2 = () => {

    this.setState({isModalVisible: false});

	//this.props.navigation.navigate('Sign_Up');
  };*/
/*
 stuatusput = (id,uname,nego) => {
    


    const {userausername} = this.state;

    //console.warn(id);
   //Alert.alert(id);

	  
	  Alert.alert('aftersubmit',`  ${id}` ,[{
      text:'okay'
      }]);

        var uid= id.toString() ;

   
   var data ={"reqid":uid,"runame":uname,"suname":userausername, "receiverstatus":nego,"senderstatus":"Accepted","lawyer":"notyest","comments": "commentNo"}
  fetch('http://192.168.8.103:8080/api/auth/userareqstatus', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
      ,
  })
   .then((res)=>{
            let status = res.status;
            if (status == 200) {
              //this.props.navigation.navigate
			//  this.props.navigation.navigate('login');
				     //console.warn("status is working thanusan wa nathi karoo")
			  
            } else {
            
             Alert("Already Accpted user")

            }
          }).done();
 
 
    /* Alert.alert('aftersubmit',`${name} + ${username}`,[{
	 text:'okay'
	 }]);
	 
  }*/


      
    render() {
        return (
         
           

            <ImageBackground source={{ uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' }} style={{flex:1}}>
                <ScrollView>
                <View style={{flex:3,alignItems: 'center', }}   > 
                <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="from"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(from) => this.setState({ from })}
					  value={this.state.from}
                    keyboardType="default"

                />

				<TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="To"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(to) => this.setState({ to })}
					 value={this.state.to}
                    keyboardType="default"

                />

				 <TextInput style={styles.ModalinputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Message"
                    placeholderTextColor="#494949"
					//onChangeText={text => this.setState({username: text})} 
					 onChangeText={(message) => this.setState({ message })}
					 value={this.state.message}
                    keyboardType="default"

                />

						


           
			  <TouchableOpacity style={styles.ModalButton2} onPress={this.sendMessage.bind(this)}>
                    <Text style={styles.ModalbuttonText}>submit</Text>
                </TouchableOpacity>
        
                
                
                
                
                </View>



                <View style={{flex:1}}>
                    

                <TouchableOpacity style={styles.ModalButton} onPress={() => this.props.navigation.navigate('Inbox',{username:this.state.username})}>
                    <Text style={styles.ModalbuttonText}>Inbox messages</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.ModalButton} onPress={() => this.props.navigation.navigate('Sentbox',{username:this.state.username})}>
                    <Text style={styles.ModalbuttonText}>sent box</Text>
                </TouchableOpacity>
        
                    
                    
                     </View>

            

                     </ScrollView>


          </ImageBackground>
        
        );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    
      },
      cardItemStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: '#000066',
        borderBottomColor: '#000066',
        width:350,
        flexDirection: 'row',
        alignItems:'center'
    },
    cardStyle: {
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      width:350,
      flexDirection: 'row',
      alignItems:'center'
    },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      accbutton:{
        textAlign: 'center',
        justifyContent: 'center'
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      vessel: {
        margin: 10,
        width: 350,
        height: 150,
        backgroundColor: '#343434',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
      },
      text: {
        fontSize: 18,
        color: 'black'
      },
      form: {
         flex: 1,
         flexDirection: 'row',
         alignItems:'center',
         width: '100%',
         padding: 20,
         backgroundColor: '#343434',
         borderRadius: 15,
         borderColor: 'white'
       },

       container2: {
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
    },
    ModalButton: {
        backgroundColor: '#000000',
        width:150,
          borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
          //flexDirection:'row',
          alignItems: 'center',
            justifyContent: 'center'
      },
       ModalbuttonText: {
          fontSize: 20,
          fontWeight: '500',
          color: '#ffffff',
          textAlign: 'center',
          justifyContent: 'center'
      },
  
      ModalinputBox:{
       width: 300,
          backgroundColor: 'rgba(255,255,255,0.6)',
          borderRadius: 25,
          paddingHorizontal: 16,
          fontSize: 16,
          color: '#494949',
          marginVertical: 10
  
      },ModalButton2: {
        backgroundColor: '#000000',
         width:150,
          borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
          //flexDirection:'row',
          alignItems: 'center',
            justifyContent: 'center'
      },
  
  



});
