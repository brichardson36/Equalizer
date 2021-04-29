import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';
import { Searchbar,Card } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
const Profile = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
      <ScrollView
          style={{
            flexGrow: 0,
            width: "100%",
            height: "100%",
        }}>
            <View style={styles.row1}>
            
                <View style = {{flex: 1, padding:10}}>
                    <Card >
                      <Card.Title title="Name:"  />
                      <View style={{paddingLeft:15,paddingRight:10,paddingButtom:10}}>
                            <View style = {{flex: 1}}>
                                <Text style={styles.price2 } h4>
                                    Ryan Faulkner
                                </Text>
                            
                                
                            </View>
                      </View>
                      <View style={{flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      paddingVertical: 20,
                      paddingHorizontal: 16,}}>
                        <LinearGradient 
                          colors={['#08d4c4', '#01ab9d']}
                          style={styles.signIn}
                          >
                              <TouchableOpacity onPress={() => alert('Change name')}>
                                  <Text style={[styles.textSign,{
                                      color:'#fff'
                                  }
                                  ]}>
                                      Change Name
                                  </Text>
                              </TouchableOpacity>
                        </LinearGradient>
                      
                    </View>
                    </Card>
                  </View>
            </View>


            <View style={styles.row1}>
            
                <View style = {{flex: 1, padding:10}}>
                    <Card >
                      <Card.Title title="Email:"  />
                      <View style={{paddingLeft:15,paddingRight:10,paddingButtom:10}}>
                            <View style = {{flex: 1}}>
                                <Text style={styles.price2 } h4>
                                    Ryan_Faulkner@gmail.com
                                </Text>
                            
                                
                            </View>
                      </View>
                      <View style={{flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      paddingVertical: 20,
                      paddingHorizontal: 16,}}>
                        <LinearGradient 
                          colors={['#08d4c4', '#01ab9d']}
                          style={styles.signIn}
                          >
                              <TouchableOpacity onPress={() => alert('Change name')}>
                                  <Text style={[styles.textSign,{
                                      color:'#fff'
                                  }
                                  ]}>
                                      Change Email
                                  </Text>
                              </TouchableOpacity>
                        </LinearGradient>
                      
                    </View>
                    </Card>
                  </View>
            </View>


            <View style={styles.row1}>
            
                <View style = {{flex: 1, padding:10}}>
                    <Card >
                      <Card.Title title="Password"  />
                      <View style={{paddingLeft:15,paddingRight:10,paddingButtom:10}}>
                            <View style = {{flex: 1}}>
                                
                            
                                
                            </View>
                      </View>
                      <View style={{flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      paddingVertical: 20,
                      paddingHorizontal: 16,}}>
                        <LinearGradient 
                          colors={['#08d4c4', '#01ab9d']}
                          style={styles.signIn}
                          >
                              <TouchableOpacity onPress={() => alert('Change name')}>
                                  <Text style={[styles.textSign,{
                                      color:'#fff'
                                  }
                                  ]}>
                                      Change Password
                                  </Text>
                              </TouchableOpacity>
                        </LinearGradient>
                      
                    </View>
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
    );
};

export default Profile;

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


