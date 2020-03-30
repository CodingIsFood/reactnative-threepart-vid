import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';

import MapView from 'react-native-maps';

function DetailsScreen({ navigation }) {
    return (
      <View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to Details Screen</Text>
      </View>
      <View>
        <MapView 
          style={styles.mapStyle}
          region={{
            latitude: 6.5994,
            longitude: 3.3540,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
          <MapView.Marker
          coordinate={{
            latitude: 6.5994,
            longitude: 3.3540,
          }}
          title="THT"
          description="Training Heights"
        /> 
        </MapView> 
    
      </View>
      </View>
    );
    }

    export default DetailsScreen;

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
      
    
    
    
    