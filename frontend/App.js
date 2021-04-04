import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from "./Pages/MainTabScreen";
import {DrawerContent} from './Pages/DrawerContent';
import SupportScreen from './Pages/SupportScreen';
import RootStackScreen from './Pages/RootStackScreen';
const Drawer = createDrawerNavigator();



export default class App extends React.Component {
  render(){
    return (
      // <View style = {styles.container}>
      //   <Login></Login>
      // </View>
      <NavigationContainer style = {styles.container}>
        <RootStackScreen/>
        {/*<Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent{... props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
    </Drawer.Navigator>*/}

      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});