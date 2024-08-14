import { View, Text,Image, Dimensions, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'

import React from 'react'
import {staff} from "../data/index"
import Carousel from 'react-native-snap-carousel'
import theme from '../theme'
var {width,height} = Dimensions.get("screen")

const Crousal = () => {
    let data=staff
  return (
    <View>
       <View className="mb-5 bg-white"> 
      <Text className="text-gray-700 text-xl m-3 text-center p-2 font-bold">Our Staff</Text>

      <Carousel
      data={data}
      renderItem={({item})=><MovieCard item={item} />}
      firstItem={1}
      inactiveSlideOpacity={0.6}
      sliderWidth={width}
      itemWidth={width*0.8}
      slideStyle={{display:"flex", alignItems:"center"}}
      />
    </View>
    </View>
  )
}

let MovieCard=({item,handleClick})=>{
    return(
        <View style={{backgroundColor:theme.bgColor(1)}} >
            <TouchableOpacity
            onPress={()=>{}}
            className="" 
            >
              <View className="flex-row ">
              <View className="items-center justify-center">
            {/* <Text className="text-white">{item}</Text> */}
            <Image source={item.image}
            style={{width:width*0.3,height:height*0.3}}
            className=" mr-2 "
            />
            </View>
            <View className="w-30 p-2">
            <Text className="text-neutral-500 font-bold py-1 text-lg text-center "> {item.name} </Text>
            <Text className="text-white font-bold  text-xl text-center "> {item.role}</Text>
            <Text className="text-neutral-500 font-bold  text-md text-center "> Exp:1 year+ </Text>
           <View className="flex-row justify-center items-center py-1 space-x-2">
              <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4" />
              <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4" />
              <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4" />
           </View>



            </View>
            </View>
            

            </TouchableOpacity>
        </View>
    )
}

export default Crousal