import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import categories from "./data/index"
import { categories } from "../data/index"
import theme from '../theme'
import { useState } from 'react'

const Categories = () => {
    let [agree, setAgree] = useState(null)
    let [sid, setid] = useState(false)

    return (
        <View className="mt-5 ">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                className="overflow-visible"

            >

                {/* categories */}
                {
                    categories.map((item, index) => {
                        let id = item.id == agree
                        let bg = id ? "bg-gray-400 text-semibold" : "bg-gray-200"
                        return (
                            <TouchableOpacity onPress={() => { setAgree(item.id) }} key={index}
                            className="items-center">
                                <View className={` rounded-full p-3 m-2 ${bg} items-center text-center `} >
                                    <View className=
                                        "">
                                        <Image source={item.image} style={{ width: 50, height: 35 }} />
                                    </View>

                                </View>
                                    <Text style={{ color: id ? theme.text : "black" }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default Categories