import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Home from './Home';
import AppScreen from '../AppScreen';

const RootStack = createStackNavigator();


export function RootStackScreen(props) {

    return(
        <RootStack.Navigator screenProps = {{setLoggedIn: () => {props.setLoggedIn}}} headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </RootStack.Navigator>
    );
}

export default RootStackScreen;