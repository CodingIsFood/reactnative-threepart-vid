import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';


function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#9e2dd6"
          barStyle="light-content"
        />
        <Text style={styles.welcome}>Welcome to Training Heights</Text>
        <Text style={styles.logintext}>Login to continue!</Text>
        <TextInput 
            placeholder="enter email" 
            style={styles.input}
            onChangeText={(username)=>setUserDetails(username)} 
        />
        <TextInput 
            placeholder="enter password" 
            style={styles.input} 
            secureTextEntry 
            onChangeText={(password)=>setUserDetails(password)} 
            />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
          <TouchableOpacity style={styles.btn} onPress={() => alert("login pressed")}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn} 
            onPress={() => alert("register pressed")}>
            <Text style={styles.btntext}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style= {{margin: 5}}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        </View>
      </View>
    ); 
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9e2dd6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    welcome: {
      fontSize: 30,
      justifyContent: 'center',
      margin: 10,
      textAlign: 'center',
      fontFamily: "sans-serif-medium",
      fontWeight: 'bold',
      color: '#fff',
    },
  
    logintext: {
      fontSize: 30,
      justifyContent: 'center',
      margin: 10,
      textAlign: 'center',
      fontStyle: 'italic',
      fontFamily: "sans-serif-condensed",
      color: '#fff',
    },
  
    input: {
      backgroundColor:'#fff',
      margin: 15,
      width: '90%',
      padding: 10, 
    },
  
    btntxt: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    btn: {
      backgroundColor: '#00FF00',
      padding: 10,
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
  });
  