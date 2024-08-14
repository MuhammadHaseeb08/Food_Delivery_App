import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React, {useState,useEffect} from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import theme from '../theme'




const RestCard = ({ item }) => {
  let navigation = useNavigation()
  let url="v1692152095/eyygewtlcxl304ezqvka.jpg"
const [image, setimage] = useState("")
  useEffect(() => {
      // setimage(require(item.image))
  }, [])
  return (
    <TouchableWithoutFeedback className=""
      onPress={() => navigation.navigate("Resturant", { ...item })}

    >
      <View style={{shadowColor: theme.bgColor(2), shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image source={{uri:item.image}} className="w-64 h-36 rounded-t-3xl" />
        <View className="m-2  ">
          <Text className="font-bold text-lg ">{item.name}</Text>
          <View className="flex flex-row space-x-2  pb-1  m-2 ">
            <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4" />
            <Text className="text-green-500 font-semibold">{item.stars}</Text>
            <View className="mx-1 border-l-2 border-gray-400 ">
              <Text className="pl-1">Reviws ! {item.reviews}</Text>
            </View>
          </View>
          <View className="flex flex-row space-x-2 ml-2">
            <Icon.MapPin width="15" height="15" stroke="gray" />
            {/* <Text className="text-green-500 font-semibold">{item.stars}</Text> */}
            <View className=" text-gray-700">
              <Text className="pl-1">Nearby,{item.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RestCard