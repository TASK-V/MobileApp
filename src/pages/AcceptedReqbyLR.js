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

export default class AcceptedReqbyLR extends Component {

    static navigationOptions = {
        title: 'Loan Receivers\' details',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerRight:null
      };

      constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
      
          dataSource: [],
          notification: "0",
          active: false,
          accesstoken: '',
          notification_color:'blue',
          duration:'',
          last_update:'',
          numOfNotifications:'',
          test:'ssss',
          userbusername:this.props.navigation.state.params.username,
         loanreceiveruname:'',
         sum:0,
         isModalVisible: false,
        
         receiverstatus:"",
         senderstatus:"Accepted",
        }
      }

    componentDidMount() {
        this.loadData();
        

         }

    loadData() {
       // //console.warn("this is inside the load function ")
          
        const url = 'http://192.168.8.103:8080/api/auth/getuserareqstatus/runame/'+ this.state.userbusername +'/status/Accepted'
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
          this.state.isLoading
            ?
          


            <ImageBackground source={{ uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' }} style={{flex:1}}>
                
              <ActivityIndicator />
            </ImageBackground>
            :
            <View style={{flex:1}}>
            
            <Container>
           <ImageBackground source={{ uri: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' }}  style={{flex:1}}>
           
          
          <Content>
         
          {this.state.dataSource.map((item, index) => {

            //  this.notify(item);
                return(
                    <View style={styles.container}>
      
                      <Card key={index} style={styles.cardStyle} >
                      <CardItem  style={styles.cardItemStyle} >
                        <Left>
                          <Body>
                          
                        
                          <Text style={{color:'#4824F6'}}>Loan Provider name:</Text>
                            <Text style={{color:'black'}}>{item.runame}</Text> 
                            <Text style={{color:'#4824F6'}}>Request ID:</Text> 
                            <Text style={{color:'black'}}>{item.reqid}</Text> 
                            <Text style={{color:'#4824F6'}}>Request Status:</Text> 
                            <Text style={{color:'black'}}>{item.receiverstatus}</Text>
                     
                            
                            <Text></Text>
                           
                            <Text></Text>
                            <Text></Text>
                          </Body>
                        </Left>
                      </CardItem>
                      
                    </Card>
                    </View>
                    
                  );
            
            
          })}
    
    
        
          </Content>
          </ImageBackground>
        </Container>
    
            </View>
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
    }



});
