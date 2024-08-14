import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Icon from "react-native-feather";
import theme from '../theme';
import axios from "axios"
import { setCart } from '../store/store';
import { toShow } from '../store/store';
import { useDispatch } from "react-redux";


const DishRow = ({ item }) => {
    let [qty,setqty]=useState(1)
    
        let dispatch=useDispatch()
    let updateQty=async (qty,total)=>{
        let id= item._id
            // console.log(id);
            let resp= await axios.put(`http://192.168.0.105:4000/upQty/${id}`,{data:{
                qty,total
            }})
    }
    return (
        <View style={{shadowColor: theme.bgColor(4), shadowRadius: 8}} className="m-2 bg-white rounded-3xl shadow-lg">
            <View className="flex flex-row p-2 m-2 rounded-lg bg-white shadow-xl">
                <View >
                    <Image source={{uri:item.image}} style={{ width: 100, height: 100 }}
                        className="rounded-3xl"
                    />
                </View>
                <View className="p-3">
                    <Text className="font-bold text-lg">
                        {item.name}
                    </Text>
                    <Text className="font-semibold text-md text-gray-700">
                        {item.description}
                    </Text>
                    <Text className="font-semibold text-md text-gray-700">
                        ${item.price}
                    </Text>
                  
                    <View className="flex flex-row justify-between space-x-5">
                    <View className="p-2 flex flex-row space-x-2 ">
                 
                   <View>
                   <TouchableOpacity disabled={item.qty>1?false:true} className="  rounded-full" style={{backgroundColor:theme.bgColor(1)}}
                     onPress={async()=>{
                        item.qty= item.qty-1
                          let nqty=item.qty
                          let price= item.price
                          item.subTotal= item.qty*price
                          let total=item.subTotal
                        //   console.log(nqty);
                          setqty(nqty)
    
                            let resp= await axios.put(`http://192.168.0.105:4000/editQty/${item._id}`, {nqty,total});
    
    
    
    
    
                        // item.qty=item.qty+1
                        // let nqty=item.qty
                        // let price= item.price
                        // // console.log();
                        // let total= nqty*price
                        // item.subTotal=total
                        // console.log(item.subTotal,nqty);
                        // let resp= await axios.put(`http://192.168.0.103:4000/upQty/${item._id}`,{
                        //     nqty,total
                        // })
    
    
                       }}
                   
                   >
                            <Icon.Minus  stroke="white" strokeWidth={1
                            }

                                className="m-2"
                                />
                        </TouchableOpacity>
                   </View>
                   <View className="items-center justify-center ">
                       <Text className="font-bold">{item.qty}</Text>
                   </View>
                   <View>
                   <TouchableOpacity className="  rounded-full" style={{backgroundColor:theme.bgColor(1)}}
                   onPress={async()=>{
                    item.qty= item.qty+1
                      let nqty=item.qty
                      let price= item.price
                      item.subTotal= item.qty*price
                      let total=item.subTotal
                    //   console.log(nqty);
                      setqty(nqty)

                        let resp= await axios.put(`http://192.168.0.105:4000/editQty/${item._id}`, {nqty,total});





                    // item.qty=item.qty+1
                    // let nqty=item.qty
                    // let price= item.price
                    // // console.log();
                    // let total= nqty*price
                    // item.subTotal=total
                    // console.log(item.subTotal,nqty);
                    // let resp= await axios.put(`http://192.168.0.103:4000/upQty/${item._id}`,{
                    //     nqty,total
                    // })


                   }}
                   >
                            <Icon.Plus  stroke="white" strokeWidth={1
                            }

                                className="m-2"
                                />
                        </TouchableOpacity>
                   </View>
                   
               </View>
                        <View className="p-2">
                        <View>
                        <TouchableOpacity className="  rounded-full" style={{backgroundColor:theme.bgColor(1)}}
                        onPress={async()=>{
                            // console.log(item);
                            let resp= await axios.post("http://192.168.0.105:4000/cart",{item})
                            if (resp.data.success==true) {
                                // item.qty=1
                                alert("Item added")
                                dispatch(toShow(true))
                                // setCart(1)
                                dispatch(setCart(qty))
                                
                                
                                
                            }else{
                                alert('item alredy exist')
                            }
                        }}
                        >
                            <Icon.ShoppingCart  stroke="white" strokeWidth={1
                            }

                                className="m-2"
                                />
                        </TouchableOpacity>
                        </View>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default DishRow