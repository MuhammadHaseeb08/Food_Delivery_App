import { View, Text } from 'react-native'
import React, { useState, useEffect, lazy } from 'react'
import MapView from 'react-native-maps';
// import { Marker } from 'react-native-svg';
import { featured } from '../data';
import theme from '../theme';
import { Marker } from 'react-native-maps';
import MapViewRoute from 'react-native-maps-routes';
// import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import OrderProcede from '../Components/OrderProcede';

const OrderScreen = () => {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  // console.log();
  let rest = featured[0].restaurants[0]
  const destination = { latitude: 37.423199, longitude: -122.084068 };
  const origin = { latitude: 37.332280, longitude: -122.010980 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDJr4FqrcsxMCjSYW77VtohXD803SvYJDc';
  // console.log(rest.lat);
  const [state, setstate] = useState({
    pickup: {
      latitude: 31.3998659,
      longitude: 73.1078735
    },
    destn: {
      latitude: 31.5204,
      longitude: 74.3587
    }
  })
  const [obj, setobj] = useState({
    latitude: 0,
    longitude: 0
  })
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      try {
        let location = await Location.getCurrentPositionAsync({});
        // setLocation(location);
        setobj({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        })
        
      } catch (error) {
        setobj(destination)
        
      }

   
    })();
  }, []);
  console.log(location);
  console.log(obj, "obj");
  return (
    <View className="flex-1">

      <MapView
        initialRegion={{
          latitude: state.pickup.latitude,
          longitude: state.pickup.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,

        }}
        mapType="standard"
        className="flex-1"
        // pointerEvents='box-only'
        
      >
        <Marker 
                // image={}
                icon="../assets/images/marker.png"
                
                 coordinate={
                    {
                      latitude: state.pickup.latitude,
                      longitude: state.pickup.longitude,
                    }
                 }
                 title={rest.title}
                 description={rest.description}
                 pinColor={theme.bgColor(1)}
                 
                />
                  <Marker 
                
                icon="../assets/images/marker.png"
                
                 coordinate={
                    obj?obj:destination
                 }
                 title={rest.title}
                 description={rest.description}
                 pinColor={theme.bgColor(1)}
                 
                />


        <MapViewDirections
          origin={state.pickup}
          destination={obj ? obj : state.pickup}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor={theme.bgColor(7)}
          strokeWidth={5}
          
          
        />
      </MapView>
      <OrderProcede/>


      {/* <MapViewRoute
    origin={origin}
    destination={destination}
    apiKey={GOOGLE_MAPS_APIKEY}
  /> */}

    </View>
  )  
}

export default OrderScreen


