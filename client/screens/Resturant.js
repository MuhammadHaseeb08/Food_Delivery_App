import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import theme from '../theme';
import DishRow from '../Components/DishRow';
import CartIcon from '../Components/CartIcon';
import { useSelector } from 'react-redux';



const Resturant = () => {
    let data = useRoute()
    console.log(data.params);
    let [resturant, setresturant] = useState({})
    let navigation = useNavigation()
    // let [flag,setflag]=useState(false)
    let flag=useSelector((store)=>{
                return store.showI
    })
    console.log(flag,"home");

    useEffect(() => {
        setresturant(data.params)
       

    }, [])
    // console.log( resturant.dishes)
    return (

        <View>
            <ScrollView>
                <View>
                    <View className="relative" >
                        <Image source={{uri:resturant.image}} className="w-full h-72" />
                    </View>
                    <View className="absolute left-3 top-3">
                        <TouchableOpacity className="bg-white rounded-full">
                            <Icon.ArrowLeft stroke={theme.bgColor(1)} strokeWidth={1
                            }

                                className="m-2"
                                onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                    </View>
                    <View className=" bg-white -mt-12 pt-6 " style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                        <View>
                            <Text className="font-bold text-2xl px-3 ">{resturant.name}</Text>

                        </View>
                        <View className="flex flex-row space-x-5">
                            <View className="flex flex-row space-x-2  pb-1  m-2 ">
                                <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4" />
                                <Text className="text-green-500 font-semibold">{resturant.stars}</Text>
                                <View className="mx-1 border-l-2 border-gray-400 ">
                                    <Text className="pl-1">Reviws ! {resturant.reviews}</Text>
                                </View>
                            </View>
                            <View className="flex flex-row space-x-2 m-2">
                                <Icon.MapPin width="15" height="15" stroke="gray" />
                                
                                <View className=" text-gray-700">
                                    <Text className="pl-1">Nearby,{resturant.address}</Text>
                                </View>
                            </View>
                        </View>
                        <View className="m-2">
                            <Text className="font-semibold text-lg text-gray-700"> {resturant.description}</Text>
                        </View>
                        <View className="m-2 pb-36">
                            <Text className="font-bold text-xl ">Menu</Text>
                            <View>
                                {
                                  resturant.dishes  ?  resturant.dishes.map((item,i)=>{
                                    return(
                                        <View key={i}>
                                            <DishRow item={item} />
                                            </View>
                                    )
                            }):""
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

               
                    <View className="absolute bottom-9 w-full p-3 py-5 " >
                <CartIcon/>
                </View>
            
                    
                
                
        </View>
       

    )
}

export default Resturant