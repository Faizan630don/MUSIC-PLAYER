import React, { useContext, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { MdPlaylistAdd } from "react-icons/md";

import { CiHeart } from "react-icons/ci";

import { datacontext } from '../context/UserContext';
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { AddLiked, RemoveLiked } from '../redux/LikedSlice';


function Card({name, image, singer, songIndex}) {
  
  let {playSong, index, setIndex} = useContext(datacontext)
  let dispatch = useDispatch()
  let gaana = useSelector(state => state.playlist)
  let songExistInPlaylist=gaana.some((song)=>(song.songIndex==songIndex))
  let LikedSong = useSelector(state => state.Liked)
  let songExistInLiked=LikedSong.some((song)=>(song.songIndex==songIndex))


  
  return (
  
  <div className='w-[90%] h-[100%] md:h-[100px]
  
  bg-indigo-900 rounded-lg p-[2px] md:p-[17px] flex m-3 hover:bg-indigo-950
  
  transition-all cursor-pointer'>
  
  
  {/* left */}
  
  <div className='flex justify-start items-center gap-[20px] w-[70%] h-[100%] '
  
  onClick={()=>{
  
  setIndex(songIndex)
  
  playSong()
  
  }}>
  
  <div>
  
  <img src={image} alt='' className='w-[70px] h-[70px]
  
  md:max-w-[100px] md:max-h-[100%] rounded-lg object-cover cursor-pointer'/>
  
  </div>
  
  <div className=' text-[15px] md:text-[20px] cursor-pointer '>
  
  {/* singer name */}
  
  <div className='text-white text-[1em] md:text-[1.2em]
   font-semibold '>
  
  {name}
  
  </div >
  
  
  {/* song name */}
  
  <div className='text-gray-400 text-[0.7em] 
  md:text-[1em] font-semibold '>{singer}</div>
  
  </div>
  
  </div>
  
  <div className='flex justify-center items-center 
  gap-[20px] w-[30%] h-[100% ] text-[15px] md:text-[20px] 
  text-center'>

    {!songExistInPlaylist && (<div onClick={()=>{
    dispatch(AddSong({  name:name, image:image ,singer:singer, songIndex:songIndex})
  )}}>
  
  <MdPlaylistAdd className='text-white text-[1.3em] cursor-pointer'/>
  
  </div>)}
  {songExistInPlaylist && (<div onClick={()=>{
    dispatch(RemoveSong({songIndex})
  )}}>
  
  <MdOutlinePlaylistRemove  className='text-white text-[1.3em] cursor-pointer'/>
  
  </div>)}

  {!songExistInLiked && (<div onClick={()=>{
    dispatch(AddLiked({  name:name, image:image ,singer:singer, songIndex:songIndex})
  )}}>
  
  <CiHeart className='text-white text-[1.3em] cursor-pointer'/>
  
  </div>)}
  {songExistInLiked && (<div onClick={()=>{
    dispatch(RemoveLiked({songIndex})
  )}}>
  
  <FaHeart
  className='text-white text-[1.3em] cursor-pointer'/>
  
  </div>)}
  
  
  


   
  </div>
  
  </div>
  
  )
  
  }
  
  
  
  export default Card;