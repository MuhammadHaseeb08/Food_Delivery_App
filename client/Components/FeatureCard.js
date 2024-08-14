import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import theme from '../theme'
import RestCard from './RestCard'

const FeatureCard = ({ item }) => {
    // console.log(item);
    return (
        <View>
            <View className="flex justify-between items-center flex-row p-3 m-2">

                <View className="">
                    <Text className="font-bold text-lg" >{item.title}</Text>
                    <Text style={{color:theme.text}}>{item.description}</Text>

                </View>
                <View>
                    <Text style={{color:theme.text}}>See all</Text>

                    
                    

                </View>
            </View>
            <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                className="overflow-visible"
                // backgroundColor: themeColors.bgColor(1)
            >
                    {
                        item.restaurants.map((restr,i)=>{
                                return(
                                    <View className="mb-8">
                                       <RestCard item={restr} key={i}/>
                                    </View>
                                )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default FeatureCard