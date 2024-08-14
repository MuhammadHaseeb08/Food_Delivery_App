
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
// let init={
//   _id:"",
//   cPassword:"",
//   email:"",
//   password:"",
//   username:"",
//   name:""
// }
let init = 0
let cart = createSlice({
  name: "cart",
  initialState: init,
  reducers: {
    setCart: (state, action) => {
      console.log(action.payload)
      state=state+action.payload;
      console.log(state,"qty");
      // state._id=action.payload._id
      // state.cPassword=action.payload.cPassword
      // state.email=action.payload.email
      // state.password=action.payload.password
      // state.name=action.payload.name
      // state.username=action.payload.username

    },
    resetCart: (state, action) => {
      console.log(action.payload, "store");
    }
  }

})
let ini = false
let show=createSlice({
  name:"show",
  initialState:ini,
  reducers:{
    toShow:(state=ini,action)=>{
        console.log(action.payload,"to show");
        state=action.payload
        console.log(state,"sjow");
    },
    notShow:(state=ini,action)=>{
      console.log(action.payload,"not show");
      state=action.payload
  }
  }
})

const meraStore = configureStore({
  reducer: {
    user: cart.reducer,
    showI:show.reducer
  }
})
export default meraStore
export const { setCart, resetCart, } = cart.actions
export const {toShow,notShow}=show.actions