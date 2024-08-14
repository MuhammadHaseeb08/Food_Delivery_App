import { View, Text, } from 'react-native'
import React, { useState,useEffect } from 'react'
import { featured } from '../data'
import FeatureCard from './FeatureCard'
import axios from "axios"

const Featured = () => {
  let [data,setData]=useState([])
  useEffect(() => {
    // http://192.168.18.175:4000/signUp
    let getting=async()=>{
      let resp= await axios.get("http://192.168.0.103:4000/get")
      if (resp.data.success==true) {
        setData(resp.data.data)
        
      }

    }
    getting()
  }, [])
  console.log(data);
  return (
    <View className="mt-5 pb-2">
      {
         data.map((item,i)=>{
                return(
                    <FeatureCard  item={item} key={i}/>
                )
        })
      }
    </View>
  )
}

export default Featured