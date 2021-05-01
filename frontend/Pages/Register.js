import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Home(props) {

    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const[name, setName] = React.useState('');
    const[phone, setPhone] = React.useState('');
    
    return(
        <View style = {styles.container}>
            <Text style={styles.logo}>Equalizer</Text>
            <View style = {styles.inputView}>
                <TextInput  
                style={styles.inputText}
                placeholder="Name..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setName({name:text})}/>
            </View>
            <View style = {styles.inputView}>
                <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setEmail({email:text})}/>
            </View>
            <View style = {styles.inputView}>
                <TextInput  
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setPassword({password:text})}/>
            </View>
            <View style = {styles.inputView}>
                <TextInput  
                style={styles.inputText}
                placeholder="Phone..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setPhone({phone:text})}/>
            </View>
            <TouchableOpacity onPress = {() => {
                registerButton();
                props.navigation.navigate('Login')
            }
                } style={styles.loginBtn}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
        </View>
    )

    function registerButton(){
        fetch("https://banana-sundae-06144.herokuapp.com/register", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            })
        }).then(res => {
            // console.log(res);
        })
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
      width: 150,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:100,
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white",
    }
  });
