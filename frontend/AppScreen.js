import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
   DarkTheme as NavigationDarkTheme }
    from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme}
    from 'react-native-paper';
import MainTabScreen from "./Pages/MainTabScreen";
import {DrawerContent} from './Pages/DrawerContent';
import SupportScreen from './Pages/SupportScreen';
import DetailsScreen from './Pages/DetailsScreen';
import RootStackScreen from './Pages/RootStackScreen';
import SettingsScreen from './Pages/SettingsScreen';
const Drawer = createDrawerNavigator();

export const AuthContext = React.createContext();

export default function AppScreen() {
    const [isDarkTheme,setIsDarkTheme ]=React.useState(false);
    const CustomDefaultTheme={
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
      colors:{
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background:'#ffffff',
        text:'#333333'
      }
    }

    const CustomDarkTheme={
      ...NavigationDarkTheme,
      ...PaperDarkTheme,
      colors:{
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background:'#333333',
        text:'#ffffff'
      }
    }
    
    const theme=isDarkTheme? CustomDefaultTheme : CustomDarkTheme;
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
      );

      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            // Restore token stored in `SecureStore` or any other encrypted storage
            // userToken = await SecureStore.getItemAsync('userToken');
          } catch (e) {
            // Restoring token failed
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
      }, []);

    const authContext = React.useMemo(
        () => ({
          signIn: async data => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
            // console.log("email: ", data.email)
            // console.log("password: ", data.password)
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async data => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          toggleTheme: () =>{
            setIsDarkTheme(isDarkTheme=> !isDarkTheme);
          }
        }),
        []
      );

    return(
      <PaperProvider theme={theme}>
        <AuthContext.Provider value = {authContext}>
            <NavigationContainer theme={theme} style = {styles.container}>
                {(state.isLoading || state.userToken == null) && 
                <RootStackScreen/>
                }
                {state.userToken != null && 
                <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent{... props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                    <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} />
                    <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
                    
                </Drawer.Navigator>
                }
            </NavigationContainer>
        </AuthContext.Provider>
        </PaperProvider>
    )
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