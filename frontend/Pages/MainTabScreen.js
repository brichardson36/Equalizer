import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import ExploreScreen from "./ExploreScreen";

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Tab=createMaterialBottomTabNavigator();

const MainTabScreen=()=>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    //barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor:'#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    
    <Tab.Screen
      name="Profile"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:'#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor:'#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    
  </Tab.Navigator>
    
);

export default MainTabScreen;

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