


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { createAppContainer,createDrawerNavigator,DrawerItems,HeaderButtons, } from "react-navigation";
import { Platform, StyleSheet, View, StatusBar, Text ,AsyncStorage ,Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Menu from './src/pages/Menu';
import MultiText from './src/components/MultiText';
import PopUpFormInvestee from './src/components/PopUpFormInvestee';
import PopUpFormInvestor from './src/components/PopUpFormInvestor';
import LoanProviderForm from './src/components/LoanProviderForm';
import LoanReceiverForm from './src/components/LoanReceiverForm';
import Form from './src/components/Form';
import Form2 from './src/components/Form2';
import Investee from './src/pages/Investee';
import Investor from './src/pages/Investor';
import LReceiver from './src/pages/LoanReceiver';
import LProvider from './src/pages/LoanProvider';
import gettingAlluseraEx from './src/pages/gettingAlluseraEx';
import gettingAlluserbEx from './src/pages/gettingAlluserbEx';
import AcceptedReqbyLR from './src/pages/AcceptedReqbyLR';
import AcceptedReqbyLP from './src/pages/AcceptedReqbyLP';
import AcceptedReqbyItee from './src/pages/AcceptedReqbyItee';
import AcceptedReqbyItor from './src/pages/AcceptedReqbyItor';
import seeAllUseraReq from './src/pages/seeAllUseraReq';
import seeAllUserbReq from './src/pages/seeAllUserbReq';//all the requests for a given username
import seeAllUsercReq from './src/pages/seeAllUsercReq';
import seeAllUserdReq from './src/pages/seeAllUserdReq';
import AllUserbReq from './src/pages/AllUserbReq';
import AllUseraReq from './src/pages/AllUseraReq';
import AllUsercReq from './src/pages/AllUsercReq';
import AllUserdReq from './src/pages/AllUserdReq';
import LPReqDetailsforLR from './src/pages/LPReqDetailsforLR';
import LRReqDetailsforLP from './src/pages/LRReqDetailsforLP';
import IteeReqDetailsforItor from './src/pages/IteeReqDetailsforItor';
import  ItorReqDetailsforItee from './src/pages/ItorReqDetailsforItee';
import  Lawyer from './src/pages/Lawyer';
import Announcement from './src/pages/Announcement';
import Usermessages from './src/pages/Usermessages';
import Inbox from './src/pages/Inbox';
import Sentbox from './src/pages/Sentbox';
import MainScreen from './src/pages/MainScreen';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});










class App extends Component<{}> {

 constructor(props) {
        super(props);

    
    }


    render() {
        return (
       
            
                <AppStackNavigator />

         
        );
    }
}


const AppStackNavigator = createStackNavigator({
    MainScreen:MainScreen,
  login: {
    screen: Login,

  },
    Sign_Up: {
	
	screen :SignUp,


    },
   
    
    Menu: Menu,
 
	 investeeForm: PopUpFormInvestee,
  investorForm: PopUpFormInvestor,
    LPForm: LoanProviderForm,
	 LRForm: LoanReceiverForm,
   investee:Investee,
   investor:Investor,
    LR: LReceiver,
    LP: LProvider,
    Announcement:Announcement,
    Usermessages:Usermessages,
    Inbox:Inbox,
    Sentbox:Sentbox,
    getAllusera:gettingAlluseraEx,
    getAlluserb:gettingAlluserbEx,
    AllUserbReq:AllUserbReq,
    AllUseraReq:AllUseraReq,
    AllUsercReq: AllUsercReq,
    AllUserdReq: AllUserdReq,
    LPReqDetailsforLR:LPReqDetailsforLR,
    LRReqDetailsforLP:LRReqDetailsforLP,
    IteeReqDetailsforItor:IteeReqDetailsforItor,
    ItorReqDetailsforItee:ItorReqDetailsforItee,
    AcceptedReqbyLR:AcceptedReqbyLR,
    AcceptedReqbyLP:AcceptedReqbyLP,
    AcceptedReqbyItee:AcceptedReqbyItee,
    AcceptedReqbyItor:AcceptedReqbyItor,
    seeUseraReq:seeAllUseraReq,
    seeUserbReq:seeAllUserbReq,
    seeUsercReq:seeAllUsercReq,
    seeUserdReq:seeAllUserdReq,
    Lawyer:Lawyer,
   

})


const Apps = createAppContainer(AppStackNavigator);

export default Apps;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'

    },

});
