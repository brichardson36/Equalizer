import React, {useEffect} from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity,  ScrollView} from 'react-native';
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
    const theme=useTheme();

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
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
                            {/*<View  style = {{flex: 1, marginLeft: 50}}>
                            <TouchableRipple  onPress={()=>{toggleTrack()}}>
                                <View style={styles.preference}>
                                    <Text style={{color: colors.text}}>Track?</Text>
                                    <View pointerEvents="none">
                                        <Switch value={track}/>
                                    </View>
                                    </View>
                            </TouchableRipple>
                            </View>*/}
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
                            {/*<View  style = {{flex: 1, marginLeft: 50}}>
                            <TouchableRipple  onPress={()=>{toggleTrack()}}>
                                <View style={styles.preference}>
                                    <Text style={{color: colors.text}}>Track?</Text>
                                    <View pointerEvents="none">
                                        <Switch value={track}/>
                                    </View>
                                    </View>
                            </TouchableRipple>
                            </View>*/}
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
                            {/*<View  style = {{flex: 1, marginLeft: 50}}>
                            <TouchableRipple  onPress={()=>{toggleTrack()}}>
                                <View style={styles.preference}>
                                    <Text style={{color: colors.text}}>Track?</Text>
                                    <View pointerEvents="none">
                                        <Switch value={track}/>
                                    </View>
                                    </View>
                            </TouchableRipple>
                            </View>*/}
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
            
            {/*<View style = {{flex: 1, flexDirection: "row", paddingTop:30}}>
                <View>
                    <Image source={{ uri: imgContent }} style={{ width: 150, height: 150 }} />
                </View>
                <View style = {{ flex: 1, flexDirection: "column"}}>
                    <View style = {{ flex: 1, paddingLeft: 15 }}>
                        <Text style={{color: colors.text}}>{description}</Text>
                    </View>
                </View>
            </View>
            <View style = {{flex: 1, marginTop: 20}}>
            <TouchableRipple onPress={()=>{toggleTrack()}}>
                <View style={styles.preference}>
                    <Text style={{color: colors.text}}>${price} - Track?</Text>
                    <View pointerEvents="none">
                        <Switch value={track}/>
                    </View>
                    </View>
            </TouchableRipple>
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
                <View style = {{ flex: 1, flexDirection: "column"}}>
                    <View style = {{ flex: 1, paddingLeft: 15 }}>
                        <Text style={{color: colors.text}}>{descriptionTwo}</Text>
                    </View>
                </View>
            </View>
            <View style = {{flex: 1, marginTop: 50}}>
            <TouchableRipple onPress={()=>{toggleTrackTwo()}}>
                <View style={styles.preference}>
                    <Text style={{color: colors.text}}>${priceTwo} - Track?</Text>
                    <View pointerEvents="none">
                        <Switch value={trackTwo}/>
                    </View>
                    </View>
            </TouchableRipple>
        </View>*/}

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
    scrollViewHolder:
   {
      
   },

   item:
   {
      padding: 10,
      color: '#ffffff',
      fontSize: 18,
      margin: 1,
      borderColor: '#ffffff',
      borderWidth: 1,
      backgroundColor: '#009387'
   },

   separator:
   {
      width: 1, 
   },
   container2:
   {
      flex: 0.6,
      justifyContent: 'center'
   },

   name: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        color: '#5a647d',
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col1: {
        flex: 1,
    },
  });
