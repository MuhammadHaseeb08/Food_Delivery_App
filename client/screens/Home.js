import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import Featured from '../Components/Featured'
import Swiper from '../Components/Swiper'
import { ScrollView } from 'react-native'
import Crousa from "../Components/Crousa"
import { useSelector } from 'react-redux'

const Home = () => {
  return (
    <View className=" bg-white">
      <SafeAreaView>

        
        <ScrollView>
        <SearchBar/>
        <Categories/>
        <Featured/>
        <Crousa/>
        </ScrollView>
      </SafeAreaView>
      
    </View>
  )
}

export default Home