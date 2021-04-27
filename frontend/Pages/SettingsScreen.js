import React, {useEffect} from 'react';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { View,StyleSheet,TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
export default function Settings({navigation}) {

    const[limit, setLimit]= React.useState(true)
    const[silent, setSilent]= React.useState(false)
    const[workHours, setWorkHours] = React.useState(false)
    const[price, setPrice] = React.useState(false)
    const[pre, setPre] = React.useState(false)
    const[annoy, setAnnoy]= React.useState(false)
    const[newDeal, setNewDeal] = React.useState(true)
    const[textNotif, setTextNotif] = React.useState(false)
    const[background, setBackground] = React.useState(true)

    const toggleLimit=()=>{
        setLimit(!limit);
    }

    const toggleSilent=()=>{
        setSilent(!silent);
    }

    const toggleWorkHours=()=>{
        setWorkHours(!workHours);
    }

    const togglePrice=()=>{
        setPrice(!price);
    }

    const togglePre=()=>{
        setPre(!pre);
    }

    const toggleAnnoy=()=>{
        setAnnoy(!annoy);
    }

    const toggleNewDeal=()=>{
        setNewDeal(!newDeal);
    }

    const toggleTextNotif=()=>{
        setTextNotif(!textNotif);
    }

    const toggleBackground=()=>{
        setBackground(!background);
    }


    return(
        <View >

            <TouchableRipple onPress={()=>{toggleSilent()}}>
                <View style={styles.preference}>
                    <Text>Quiet Mode</Text>
                    <View pointerEvents="none">
                        <Switch value={silent}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{toggleLimit()}}>
                <View style={styles.preference}>
                    <Text>Limit Notifications</Text>
                    <View pointerEvents="none">
                        <Switch value={limit}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{toggleWorkHours()}}>
                <View style={styles.preference}>
                    <Text>Silent Work Hours</Text>
                    <View pointerEvents="none">
                        <Switch value={workHours}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{togglePrice()}}>
                <View style={styles.preference}>
                    <Text>Notify Price Change</Text>
                    <View pointerEvents="none">
                        <Switch value={price}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{togglePre()}}>
                <View style={styles.preference}>
                    <Text>Pre-Notifications</Text>
                    <View pointerEvents="none">
                        <Switch value={pre}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{toggleAnnoy()}}>
                <View style={styles.preference}>
                    <Text>Annoy me with Notifications</Text>
                    <View pointerEvents="none">
                        <Switch value={annoy}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{toggleNewDeal()}}>
                <View style={styles.preference}>
                    <Text>Notify me on Hot Deals!</Text>
                    <View pointerEvents="none">
                        <Switch value={newDeal}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{toggleTextNotif()}}>
                <View style={styles.preference}>
                    <Text>Send Text Notification</Text>
                    <View pointerEvents="none">
                        <Switch value={textNotif}/>
                    </View>
                    </View>
            </TouchableRipple>

            <TouchableRipple onPress={()=>{toggleBackground()}}>
                <View style={styles.preference}>
                    <Text>Allow App to Run in Background</Text>
                    <View pointerEvents="none">
                        <Switch value={background}/>
                    </View>
                    </View>
            </TouchableRipple>

            <View style={styles.preference2}>
            <LinearGradient 
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                        >
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={[styles.textSign,{
                                    color:'#fff'
                                }
                                ]}>
                                    Save
                                </Text>
                            </TouchableOpacity>
            </LinearGradient>
            </View>
        </View>
        

        
    )
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
    signIn: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    preference2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      
  });
