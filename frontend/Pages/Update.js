import React, {useEffect} from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity,  ScrollView} from 'react-native';
import { AuthContext } from '../AppScreen';
import { Searchbar,Card } from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';
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
export default function Update({navigation}) {
    const{colors}=useTheme();
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
    const theme=useTheme();

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        
        <View style = {{flex: 1, flexDirection: "column"}}>
            {/*<StatusBar barStyle={theme.dark? "light-content":"dark-content"}/>*/}
            <StatusBar barStyle="light-content"/>
            


        

        <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
        }}>
            <View style={styles.row1}>
            
            <View style = {{flex: 1,padding:5,margin:5}}>
                <Card >
                    <View  style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 2,
                        marginLeft:5,
                        marginTop: 15,
                        color: '#5a647d',}} h2>
                                BackPack
                        </Text>
                       
                    </View>           
                    <View style={{padding:10}}>
                    
                        <View style={{ justifyContent: 'center', alignItems:'center'}}>
                            <Image
                            style={{ width: "95%", height: 250}}
                            resizeMode="cover"
                            source={{ uri: imgContent }}
                            />
                        </View>
                        <View style = {{justifyContent: 'flex-end'}}>
                            <TouchableRipple  onPress={()=>{toggleTrack()}} >
                                                    <View style={styles.preference2}>
                                                        <Text style={{fontSize: 15,
                            fontWeight: 'bold',
                            marginBottom: 2,
                            
                            marginTop: 3,
                            color: '#5a647d',}}>Keep Tracking </Text>
                                                        <View pointerEvents="none">
                                                            <Switch  value={track}/>
                                                        </View>
                                                        </View>
                            </TouchableRipple>
                        </View>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>      
                        <View  style = {{flex: 1, marginLeft: 50}}>
                        </View>
                    </View>
                    </View>  
                    <View style={{  
                    flexDirection: 'column',
                    flex:1
                    }}>
                        <View style={{  
                        flexDirection: 'column',
                        flex:1,
                        padding:5
                        }}>
                            <Card>
                            <View style = {{ flex: 0.9, paddingLeft: 18, flexDirection:'row',justifyContent: 'space-between' }}>
                                <View style = {{ flex: 1}}>
                                    <Paragraph style={{color: colors.text}}>The first store just updated the price to 180$ dssdsdsd sddsddsdsds</Paragraph>
                                </View>
                                <View style = {{ flex: 0.1}}>
                                    <Icon name="ios-notifications" color={"#1f65ff"}  size={20} />
                                </View>
                            </View>
                            </Card>
                        </View>
                        <View  style={{  
                        flexDirection: 'column',
                        flex:1,
                        padding:5
                        }}>
                            <Card>
                            <View style = {{ flex: 0.9, paddingLeft: 18, flexDirection:'row',justifyContent: 'space-between' }}>
                                <View style = {{ flex: 1}}>
                                    <Paragraph style={{color: colors.text}}>The first store just updated the price to 180$ dssdsdsd sddsddsdsds</Paragraph>
                                </View>
                                <View style = {{ flex: 0.1}}>
                                    <Icon name="ios-notifications" color={"#1f65ff"}  size={20} />
                                </View>
                            </View>
                            </Card>
                        </View>
                    </View>
                </Card>

            </View>
        </View>

            <View style={styles.row1}>
            
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card >
                        <View  style={{flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 2,
                            marginLeft:5,
                            marginTop: 15,
                            color: '#5a647d',}} h2>
                                    BackPack
                            </Text>
                           
                        </View>           
                        <View style={{padding:10}}>
                        
                            <View style={{ justifyContent: 'center', alignItems:'center'}}>
                                <Image
                                style={{ width: "95%", height: 250}}
                                resizeMode="cover"
                                source={{ uri: imgContent }}
                                />
                            </View>
                            <View style = {{justifyContent: 'flex-end'}}>
                                <TouchableRipple  onPress={()=>{toggleTrack()}}>
                                                        <View style={styles.preference2}>
                                                            <Text style={{fontSize: 15,
                                fontWeight: 'bold',
                                marginBottom: 2,
                                
                                marginTop: 3,
                                color: '#5a647d',}}>Keep Tracking </Text>
                                                            <View pointerEvents="none">
                                                                <Switch value={track}/>
                                                            </View>
                                                            </View>
                                </TouchableRipple>
                            </View>
                        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>      
                            <View  style = {{flex: 1, marginLeft: 50}}>
                            </View>
                        </View>
                        </View>  
                        <View style={{  
                        flexDirection: 'column',
                        flex:1
                        }}>
                            <View style={{  
                            flexDirection: 'column',
                            flex:1,
                            padding:5
                            }}>
                                <Card>
                                <View style = {{ flex: 0.9, paddingLeft: 18, flexDirection:'row',justifyContent: 'space-between' }}>
                                    <View style = {{ flex: 1}}>
                                        <Paragraph style={{color: colors.text}}>The first store just updated the price to 180$ dssdsdsd sddsddsdsds</Paragraph>
                                    </View>
                                    <View style = {{ flex: 0.1}}>
                                        <Icon name="ios-notifications" color={"#1f65ff"}  size={20} />
                                    </View>
                                </View>
                                </Card>
                            </View>
                            <View  style={{  
                            flexDirection: 'column',
                            flex:1,
                            padding:5
                            }}>
                                <Card>
                                <View style = {{ flex: 0.9, paddingLeft: 18, flexDirection:'row',justifyContent: 'space-between' }}>
                                    <View style = {{ flex: 1}}>
                                        <Paragraph style={{color: colors.text}}>The first store just updated the price to 180$ dssdsdsd sddsddsdsds</Paragraph>
                                    </View>
                                    <View style = {{ flex: 0.1}}>
                                        <Icon name="ios-notifications" color={"#1f65ff"}  size={20} />
                                    </View>
                                </View>
                                </Card>
                            </View>
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
            

            <View style = {{flex: 1, flexDirection: "row"}}>
                <View>
                    <Image source={{ uri: imgContentTwo }} style={{ width: 150, height: 150 }} />
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
    preference2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        padding:10,
    },
    price2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        marginTop: 10,
        color: '#5a647d',
    },
  });

