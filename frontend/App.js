import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen=({navigation})=>(
  <HomeStack.Navigator  
  screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      //alignSelf: 'center',
    },
  }}
  >
  
    <HomeStack.Screen name = "Home" component = {Home} options={{
    headerLeft:()=>( 
      <Icon.Button name="ios-menu" size={25}
      backgroundColor= '#009387'
      onPress={()=>navigation.openDrawer()}></Icon.Button>
    )
    }}/>
  </HomeStack.Navigator>
);

const LoginStackScreen=({navigation})=>(
  <LoginStack.Navigator  
  screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      //alignSelf: 'center',
    },
  }}
  >
  
    <LoginStack.Screen name = "Login" component = {Login}options={{
    headerLeft:()=>( 
      <Icon.Button name="ios-menu" size={25}
      backgroundColor= '#009387'
      onPress={()=>navigation.openDrawer()}></Icon.Button>
    )
    }}/>
  </LoginStack.Navigator>
);

export default class App extends React.Component {
  render(){
    return (
      // <View style = {styles.container}>
      //   <Login></Login>
      // </View>
      <NavigationContainer style = {styles.container}>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        </Drawer.Navigator>

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