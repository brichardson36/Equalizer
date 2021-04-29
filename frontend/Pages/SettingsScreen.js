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
import { useState } from "react";
import { View,StyleSheet,TouchableOpacity,  ScrollView,Picker,Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Card } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

export default function Settings({navigation}) {
    const [selectedValue, setSelectedValue] = useState("java");
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

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
      const showTimepicker = () => {
        showMode('time');
      };
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    return(
        <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
        }}>
        <View style={styles.row1}>
            <View style = {{flex: 1,padding:5,margin:5}}>
                <Card>
                    <TouchableRipple onPress={()=>{toggleSilent()}}>
                        <View style={styles.preference}>
                            <Text>Quiet Mode</Text>
                            <View pointerEvents="none">
                                <Switch value={silent}/>
                            </View>
                            </View>
                    </TouchableRipple>
                </Card>
            </View>
        </View>
        <View style={styles.row1}>
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card>
                        {/*<TouchableRipple onPress={()=>{toggleLimit()}}>
                                <View style={styles.preference}>
                                    <View >
                                    <Text>Limitjjjj Notifications</Text>
                                    </View>
                                    <View >
                                        
                                    </View>
                                </View>
                        </TouchableRipple>*/}
                        
                            <View style={styles.preference}>
                                <View style = {{flex: 0.6}}>
                                <Text>Limit Notifications</Text>
                                </View>
                                <View style={{flex: 0.4}}>
                                    <Picker
                                        selectedValue={selectedValue}
                                        style={{ height: 20, width: 150, color:'#5a647d' }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                    >
                                        <Picker.Item label="Do not limit" value="0" />
                                        <Picker.Item label="Every hour" value="1" />
                                        <Picker.Item label="Every day" value="2" />
                                        <Picker.Item label="Every week" value="3" />
                                    </Picker>
                                    </View>
                            </View>
                            </Card>
                </View>
            </View> 
            <View style={styles.row1}>
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card>
                        <TouchableRipple onPress={()=>{toggleWorkHours()}}>
                            <View style={styles.preference}>
                                <Text>Silent Work Hours</Text>
                                <View pointerEvents="none">
                                    <Switch value={workHours}/>
                                </View>
                                </View>
                        </TouchableRipple>
                        <View style = {{flex: 1,padding:5,margin:5,flexDirection:'row',justifyContent:"space-between"}}>
                            <View style = {{flex: 1}}>
                                <LinearGradient 
                                            colors={['#08d4c4', '#01ab9d']}
                                            style={{width: '60%',
                                            height: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10}}
                                            >
                                                <TouchableOpacity onPress={showTimepicker}>
                                                    <Text style={{
                                                        fontSize: 13,
                                                        fontWeight: 'bold',
                                                        color:'#fff'
                                                    }
                                                    }>
                                                        Starting time
                                                    </Text>
                                                </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <View style={{flex: 1}}>
                            <LinearGradient 
                                            colors={['#08d4c4', '#01ab9d']}
                                            style={{width: '60%',
                                            height: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10}}
                                            >
                                                <TouchableOpacity onPress={showTimepicker}>
                                                    <Text style={{
                                                        fontSize: 13,
                                                        fontWeight: 'bold',
                                                        color:'#fff'
                                                    }
                                                    }>
                                                        Ending time
                                                    </Text>
                                                </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                                />
                            )}
                        {/*<TouchableRipple onPress={()=>{togglePrice()}}>
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
                        </TouchableRipple>*/}
                    </Card>
                </View>
            </View> 
            <View style={styles.row1}>
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card>
                        <TouchableRipple onPress={()=>{toggleNewDeal()}}>
                            <View style={styles.preference}>
                                <Text>Notify me on Hot Deals!</Text>
                                <View pointerEvents="none">
                                    <Switch value={newDeal}/>
                                </View>
                                </View>
                        </TouchableRipple>
                        </Card>
                </View>
            </View> 
            <View style={styles.row1}>
                <View style = {{flex: 1,padding:5,margin:5}}>
                    <Card>
                        <TouchableRipple onPress={()=>{toggleTextNotif()}}>
                            <View style={styles.preference}>
                                <Text>Send Text Notification</Text>
                                <View pointerEvents="none">
                                    <Switch value={textNotif}/>
                                </View>
                                </View>
                        </TouchableRipple>
                        </Card>
                    </View>
                </View>
                <View style={styles.row1}>
                    <View style = {{flex: 1,padding:5,margin:5}}>
                        <Card>
                            <TouchableRipple onPress={()=>{toggleBackground()}}>
                                <View style={styles.preference}>
                                    <Text>Allow App to Run in Background</Text>
                                    <View pointerEvents="none">
                                        <Switch value={background}/>
                                    </View>
                                    </View>
                            </TouchableRipple>
                    </Card>
                </View>
            </View>
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
                                    Back
                                </Text>
                            </TouchableOpacity>
            </LinearGradient>
            </View>
        
    </ScrollView>   

        
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
