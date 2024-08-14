import { View, Text, Modal } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Resturant from './Resturant';
import Cart from './Cart';

import PreparingOrder from './PreparingOrder';
import OrderScreen from './OrderScreen';



const MyStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        {/* <Stack.Screen name="Resturant" options={{ headerShown: false }} component={Resturant} />
        <Stack.Screen name="Cart" options={{ headerShown: false }} component={Cart} />
        <Stack.Screen name="PreparingOrder" options={{ headerShown: false,presentation:"fullScreenModal" }} component={PreparingOrder} />
        <Stack.Screen name="OrderScreen" options={{ headerShown: false, }} component={OrderScreen}  /> */}

 






      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack