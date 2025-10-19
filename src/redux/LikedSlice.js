import {createSlice} from "@reduxjs/toolkit"
const LikedSlice=createSlice({
   name:"Liked",
   initialState:[],
   reducers:{
       AddLiked:(state,action)=>{
          let exist= state.find((song) => song.songIndex==action.payload.
       songIndex)
       if(exist){
           return
       }else{
           state.push(action.payload)
       }
          
       },

       RemoveLiked:(state,action)=>{
           return state.filter((song)=>(song.songIndex!==action.payload.songIndex))
       }
   }
})

export const {AddLiked,RemoveLiked}=LikedSlice.actions;
export default LikedSlice.reducer;