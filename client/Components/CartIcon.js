import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {
    const navigation=useNavigation()
    // const [data, setdata] = useState([])
    // const [flag, setflag] = useState(false)

//      useEffect(() => {
//    let getting=async()=>{
//     let resp=await axios.get("http://192.168.0.103:4000/cartData")
//     // console.log(resp.data);
//     if (resp.data.success==true) {
//         setdata(resp.data.data)
        
//     }
//     if (data.length>0) {
//         // setflag(true)
//     }
// }
// getting()
//    }, [])

    let data=useSelector((store)=>{
        return store.showI
    })
    // console.log(data,"cart");



    return (
        <View>

         
                
                 <TouchableOpacity className="p-3  rounded-full" style={{ backgroundColor: theme.bgColor(1) }}
                onPress={()=>{navigation.navigate("Cart")}}
                // disabled={flag}
            >
                <View className="flex flex-row justify-between">


                <View className="bg-white px-2  rounded-full  items-center" style={{backgroundColor:"rgba(255,255,255,0.3)"}}><Text className="text-white p-3 font-extrabold text-lg"></Text></View>
                <Text className="text-white p-3 font-extrabold text-lg items-center text-center">View Cart</Text>
                </View>
                <View>
                </View>
            
            
            </TouchableOpacity>
            
          
        </View>
    )
}

export default CartIcon