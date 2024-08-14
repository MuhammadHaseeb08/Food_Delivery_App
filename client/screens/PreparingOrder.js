import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const PreparingOrder = () => {
  const navigation=useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OrderScreen")
    }, 2000);
  
    
  }, [])
  
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={require("../assets/images/delivery.gif") } className="w-80 h-80"/>
      
    </View>
  )
}

export default PreparingOrder