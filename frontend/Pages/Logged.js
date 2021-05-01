import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Home(props) {

    var name;

    useEffect(() => {
        // name = String(props.route.params.email);
        // console.log(props.route.params.email.email)
    },[]);
    
    return(
        <View>
            <Text>{props.route.params.email.email}</Text>
        </View>
    )
}