import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, FlatList,Alert  } from 'react-native'
import React, { useMemo, useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
// import { selectResturant } from '../slices/resturantSlice';
import { useNavigation } from '@react-navigation/native';
// import { urlFor } from '../sanity';
import * as Icon from "react-native-feather";
import themeColors from '../theme';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { notShow } from '../store/store';
import { useStripe } from "@stripe/stripe-react-native";
import Testing from "../Components/testing"

export default function BasketScreen() {
    // const {initPaymentSheet, presentPaymentSheet} = useStripe();
    const [data, setdata] = useState([])
    let [total, setTotal] = useState(0)
    let [gTotal, setg] = useState(0)
    const [paymentSheetVisible, setPaymentSheetVisible] = useState(false);

    let dispatch = useDispatch()
    let stripe=useStripe()
    useEffect(() => {
        let getting = async () => {
            let resp = await axios.get("http://192.168.18.79:4000/cartData")
            // console.log(resp.data);
            if (resp.data.success == true) {
                setdata(resp.data.data)

            }
        }
        getting()
    }, [total])
    let deliveryFee =data.length==0? 0:2;
    //    console.log(data, "caryt");
    useEffect(() => {
        let tr = 0
        data.forEach(di => {
            tr += di.subTotal
            setTotal(tr)


            //    console.log("Done1")
            if (data.length == 0 ) {
                setTotal(0)
                // console.log("Done2")
                setg(0)
                deliveryFee=0
                // dispatch(notShow(false))
            } else {
                deliveryFee=2
                setg(total + deliveryFee)
            }
        });
    }, [data])

    const navigation = useNavigation();

    let payment =  async() => {
        // navigation.navigate('PreparingOrder')
        // alert(gTotal)
        if (gTotal>0) {
            
            let resp = await axios.post("http://192.168.18.79:4000/intent", { gTotal })
            console.log(resp.data,"pasy");
            if (resp.data.success==true) {
                let clientSecret=resp.data.paymentIntent
                try {
                    // Initialize the payment sheet
                    // await initPaymentSheet({
                    //   paymentIntentClientSecret: clientSecret,
                    // });
                    // const data = await response.json();
                    if (resp.data.success==false) return Alert.alert(data.message);
                    // const clientSecret = clientSecret;
                    const initSheet = await stripe.initPaymentSheet({
                      paymentIntentClientSecret: clientSecret,
                      merchantDisplayName: 'Foodies',
                    });
                    if (initSheet.error) return Alert.alert(initSheet.error.message);
                    const presentSheet = await stripe.presentPaymentSheet({
                      clientSecret,
                    });
                    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
                    // Alert.alert("Payment complete, thank you!");
                    navigation.navigate("PreparingOrder")
                    
                  } catch (error) {
                    console.error('Error initializing payment sheet:', error);
                  }
                
                
            }
        }else{
            alert("please order something")
        }
        // if (paymentSheetVisible) {
        //   let resp=  await presentPaymentSheet();
        //   }
        // console.log(data.length)
    }

    return (
        <View className=" bg-white flex-1">
            {/* top button */}
            <View className="relative py-4 shadow-sm">
                {/* <TouchableOpacity 
            style={{backgroundColor: themeColors.bgColor(1)}} 
            onPress={navigation.goBack()} 
            className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity> */}
                <View>
                    <Text className="text-center font-bold text-xl">Your cart</Text>
                    <Text className="text-center text-gray-500">

                        title
                    </Text>
                </View>

            </View>

            {/* delivery time */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-bold">Change</Text>
                </TouchableOpacity>
            </View>
            <View></View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-white pt-5"
                contentContainerStyle={{
                    paddingBottom: 50
                }}

            >
                <View>


                    <FlatList
                        data={data}
                        keyExtractor={(item) => { item._id }}
                        renderItem={({ item }) => {
                            return (

                                <View
                                    style={{ shadowColor: themeColors.bgColor(4), shadowRadius: 8 }}
                                    className="flex-row items-center space-x-3 py-2 px-4  mx-2 mb-3 bg-white rounded-3xl shadow-lg">
                                    <Text style={{ color: themeColors.text }} className="font-bold">

                                        {/* {items.length} */}
                                        {/* qty x image */}
                                        {item.qty}x
                                    </Text>
                                    <Image className="h-14 w-14 rounded-full" source={{ uri: item.image }} />
                                    <Text className="flex-1 font-bold text-gray-700">
                                        {/* {items[0]?.name} */}
                                        {/* name */}
                                        {item.name}
                                    </Text>
                                    <Text className="font-semibold text-base">
                                        {/* $price */}
                                        {/* {items[0]?.price} */}
                                        {item.price}
                                    </Text>
                                    <TouchableOpacity
                                        className="p-1 rounded-full"
                                        style={{ backgroundColor: themeColors.bgColor(1) }}
                                        // onPress={()=> dispatch(removeFromBasket({id: items[0]?.id}))}
                                        onPress={async () => {
                                            let resp = await axios.delete(`http://192.168.18.79:4000/delete/${item._id}`)
                                            if (resp.data.success == true) {
                                                setTotal(total - (item.subTotal))
                                                if (data.length==0) {
                                                    // setg((total - (item.subTotal)) + 0)
                                                   deliveryFee=0
                                                    setg(0)
                                                   
                                                }else{
                                                    setg((total - (item.subTotal)))
                                                }
                                                
                                            }

                                        }}
                                    >
                                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>





            </ScrollView>
            {/* totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className=" p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">$ totalsub
                        {total}
                    </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">${deliveryFee}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="font-extrabold">Order Total</Text>
                    <Text className="font-extrabold">${+gTotal}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        onPress={payment}
                        className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        // <Testing/>

    )
}