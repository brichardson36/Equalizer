import React, {useEffect} from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../AppScreen';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export default function Home() {

    useEffect(()=> {
        getContent();
    }, [])

    const[imgContent, setImgContent] = React.useState('none')
    const[description, setDescription] = React.useState('none')
    const[price, setPrice] = React.useState('none')
    const[track, setTrack] = React.useState(false)
    const[trackTwo, setTrackTwo] = React.useState(false)
    const[imgContentTwo, setImgContentTwo] = React.useState('none')
    const[descriptionTwo, setDescriptionTwo] = React.useState('none')
    const[priceTwo, setPriceTwo] = React.useState('none')

    const toggleTrack=()=>{
        setTrack(!track);
    }

    const toggleTrackTwo=()=>{
        setTrackTwo(!trackTwo);
    }

    return(
        <View style = {{flex: 1, flexDirection: "column"}}>
            <View style = {{flex: 1, flexDirection: "row", paddingTop:30}}>
                <View>
                    <Image source={{ uri: imgContent }} style={{ width: 150, height: 150 }} />
                </View>
                <View style = {{ flex: 1, flexDirection: "column"}}>
                    <View style = {{ flex: 1, paddingLeft: 15 }}>
                        <Text>{description}</Text>
                    </View>
                </View>
            </View>
            <View style = {{flex: 1, marginTop: 20}}>
            <TouchableRipple onPress={()=>{toggleTrack()}}>
                <View style={styles.preference}>
                    <Text>${price} - Track?</Text>
                    <View pointerEvents="none">
                        <Switch value={track}/>
                    </View>
                    </View>
            </TouchableRipple>
            </View>
            

            <View style = {{flex: 1, flexDirection: "row"}}>
                <View>
                    <Image source={{ uri: imgContentTwo }} style={{ width: 150, height: 150 }} />
                </View>
                <View style = {{ flex: 1, flexDirection: "column"}}>
                    <View style = {{ flex: 1, paddingLeft: 15 }}>
                        <Text>{descriptionTwo}</Text>
                    </View>
                </View>
            </View>
            <View style = {{flex: 1, marginTop: 50}}>
            <TouchableRipple onPress={()=>{toggleTrackTwo()}}>
                <View style={styles.preference}>
                    <Text>${priceTwo} - Track?</Text>
                    <View pointerEvents="none">
                        <Switch value={trackTwo}/>
                    </View>
                    </View>
            </TouchableRipple>
            </View>



        </View>
    )

    function getContent(){
        fetch("https://banana-sundae-06144.herokuapp.com/api/v1/products/60693043b2211d0004faf0fc").then(
            res => {
                res.json().then(
                    data=>{
                        console.log(data)
                        setImgContent(data.image)
                        setDescription(data.description)
                        setPrice(data.price)
                    }
                )
            }
        )
        fetch("https://banana-sundae-06144.herokuapp.com/api/v1/products/60693091b2211d0004faf0fe").then(
            res=> {
                res.json().then(
                    data=>{
                        setImgContentTwo(data.image)
                        setDescriptionTwo(data.description)
                        setPriceTwo(data.price)
                    }
                )
            }
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
