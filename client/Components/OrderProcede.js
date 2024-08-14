import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import theme from '../theme'
import * as Icon from "react-native-feather";

const OrderProcede = () => {
    return (
        <View>
            <View style={{ backgroundColor: theme.bgColor(0.2) }} className=" p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between items-center">
                    <View>

                        <Image source={require('../assets/images/bikeGuy.png')} className="w-24 h-20 " />
                        <Text className="">Your rider is on the way</Text>

                    </View>
                    <View className="flex-row gap-3">
                        <View className=" rounded-full  p-3  " style={{ backgroundColor: "green" }} >
                            <Icon.Home width="30" height="30" strokeWidth={2.5} stroke="white" />
                        </View>
                        <View className=" rounded-full  p-3  " style={{ backgroundColor: "red" }} >
                            <Icon.Crosshair width="30" height="30" strokeWidth={2.5} stroke="white" />
                        </View>
                    </View>

                </View>

                {/* <View className="flex-row justify-between">
                    <Text className="font-extrabold">Order Total</Text>
                    <Text className="font-extrabold">${+gTotal}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{ backgroundColor: theme.bgColor(1) }}
                        onPress={payment}
                        className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
}

export default OrderProcede