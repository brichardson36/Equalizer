import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {useTheme} from '@react-navigation/native';
export default function Update() {
    const{colors}=useTheme();
    return(
        <View>
            <Text style={{color: colors.text}}>Hi</Text>
        </View>
    )
}