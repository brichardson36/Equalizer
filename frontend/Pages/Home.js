import React, {useEffect} from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../AppScreen';
import { Searchbar ,Card } from 'react-native-paper';
import { Button } from 'react-native-elements';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Expo from 'expo';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function Home({navigation}) {
    const{colors}=useTheme();
    useEffect(()=> {
        registerForPushNotificationsAsync();
        getContent();
    }, [])

    registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
          this.setState({ expoPushToken: token });
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
        };
        
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
            {/*<StatusBar barStyle={theme.dark? "light-content":"dark-content"}/>*/}
            <StatusBar barStyle="light-content"/>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />


        <View style = {{flex: 0, paddingTop:20,paddingBottom:5}}>
            <View style = { styles.scrollViewHolder }>
                <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
                    <Text style = { styles.item }>Electronics</Text>
                    <View style = { styles.separator }/>
                    <Text style = { styles.item }>Software</Text>
                    <View style = { styles.separator }/>
                    <Text style = { styles.item }>Clothes</Text>
                    <View style = { styles.separator }/>
                    <Text style = { styles.item }>Automotive</Text>
                    <View style = { styles.separator }/>
                    <Text style = { styles.item }>Toys and Games</Text>
                    <View style = { styles.separator }/>
                    <Text style = { styles.item }>Tools</Text>
                    <View style = { styles.separator }/>
                    <Text style = { styles.item }>Household</Text>
                </ScrollView>
            </View>             
        </View>
        

        <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
        }}>
            <View style={styles.row1}>
            
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card >
                    <View style={{padding:5}}>
                        <Text style={{marginBottom: 10, marginTop: 10, color: colors.text }} h2>
                            BackPack
                        </Text>
                        <Image
                        style={{ width: "100%", height: 150 }}
                        resizeMode="cover"
                        source={{ uri: imgContent }}
                        />
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style = {{flex: 1}}>
                                <Text style={styles.price} h4>
                                    $ {price}
                                </Text>
                            
                                <Text h6 style={styles.description}>
                                    added 2h ago
                                 </Text>
                            </View>
                        </View>
                        <Button
                        type="clear"
                        title='Details'
                        //onPress={() => this.props.navigation.navigate('Details')} 
                        onPress={()=>navigation.navigate('DetailsScreen')}
                        />
                        </View>
                    </Card>
                </View>
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card >
                    <View style={{padding:5}}>
                        <Text style={{marginBottom: 10, marginTop: 10, color: colors.text }} h2>
                            BackPack
                        </Text>
                        <Image
                        style={{ width: "100%", height: 150 }}
                        resizeMode="cover"
                        source={{ uri: imgContentTwo }}
                        />
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style = {{flex: 1}}>
                                <Text style={styles.price} h4>
                                    $ {priceTwo}
                                </Text>
                            
                                <Text h6 style={styles.description}>
                                    added 2h ago
                                 </Text>
                            </View>
                        </View>
                        <Button
                        type="clear"
                        title='Details'
                        //onPress={() => this.props.navigation.navigate('Details')} 
                        onPress={()=>navigation.navigate('DetailsScreen')}
                        />
                        </View>
                    </Card>
                </View>
            </View>


            <View style={styles.row1}>
            
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card >
                        <View style={{padding:5}}>
                        <Text style={{marginBottom: 10, marginTop: 10, color: colors.text }} h2>
                            BackPack
                        </Text>
                        <Image
                        style={{ width: "100%", height: 150 }}
                        resizeMode="cover"
                        source={{ uri: imgContent }}
                        />
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style = {{flex: 1}}>
                                <Text style={styles.price} h4>
                                    $ {price}
                                </Text>
                            
                                <Text h6 style={styles.description}>
                                    added 2h ago
                                 </Text>
                            </View>
                        </View>
                        <Button
                        type="clear"
                        title='Details'
                        //onPress={() => this.props.navigation.navigate('Details')} 
                        onPress={()=>navigation.navigate('DetailsScreen')}
                        />
                        </View>
                    </Card>
                </View>
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card >
                        <View style={{padding:5}}>
                        <Text style={{marginBottom: 10, marginTop: 10, color: colors.text }} h2>
                            BackPack
                        </Text>
                        <Image
                        style={{ width: "100%", height: 150 }}
                        resizeMode="cover"
                        source={{ uri: imgContentTwo }}
                        />
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style = {{flex: 1}}>
                                <Text style={styles.price} h4>
                                    $ {priceTwo}
                                </Text>
                            
                                <Text h6 style={styles.description}>
                                    added 2h ago
                                 </Text>
                            </View>
                        </View>
                        <Button
                        type="clear"
                        title='Details'
                        //onPress={() => this.props.navigation.navigate('Details')} 
                        onPress={()=>navigation.navigate('DetailsScreen')}
                        />
                        </View>
                    </Card>
                </View>
            </View>
        </ScrollView>

        </View>
    )

    function getContent(){
        fetch("https://banana-sundae-06144.herokuapp.com/api/v1/products/60693043b2211d0004faf0fc").then(
            res => {
                res.json().then(
                    data=>{
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
