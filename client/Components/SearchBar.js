import { View, Text } from 'react-native'
import React from 'react'
// import {Search} from "react-native-heroicons/outline"
import * as Icon from "react-native-feather";
import { TextInput } from 'react-native';
import theme from '../theme';

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 p-2">
        <View className="flex-row flex-1 items-center px-2 pb-2 rounded-full border-gray-400  border-2 p-1">
                <Icon.Search width="20" height="20" stroke="gray" />
                <TextInput className=" ml-2 flex-1" placeholder='Resturant Name'/>
                  <View className=" flex-row items-center p-2 border-l-2 ml-2 border-l-gray-400">
                    <Icon.MapPin width="20" height="20" stroke="gray"/>
                    <Text className="  text-gray-400 space-x-2 ml-1">
                          New York,NYC 
                    </Text>
                  </View>
        </View>
        <View className=" rounded-full  p-3  " style={{backgroundColor:theme.bgColor(1)}} >
          <Icon.Sliders width="20" height="20" strokeWidth={2.5} stroke="white" />
        </View>
      
    </View>
  )
}

export default SearchBar