import React, { useContext, useState } from 'react'
import { songsData } from '../songs'
import { datacontext } from '../context/UserContext'
import { MdNotStarted } from "react-icons/md";
import { FaPauseCircle } from "react-icons/fa";


function Player() {
    let {playingSong,playSong,pauseSong, index }=useContext(datacontext)
  return (
    <div className='w-[100%] md:w-[60%] h-[130px] md:h-[100px] bg-white
    fixed bottom-[55px] md:bottom-0 rounded-t-[28px] shadow-lg 
    flex items-center justify-between px-[20px] md:items-center md:p-[20px] '>
      
      {/* Left side: Song info */}
      <div className='flex items-center justify-start gap-[20px] w-[80%] 
      h-[100%] cursor-pointer pl-[10px] pt-[5px] pb-[20px] '>
        <div>
          <img 
            src={songsData[index].image} 
            alt='' 
            className='w-[80px] h-[80px] md:max-w-[90px] rounded-lg
             object-cover cursor-pointer mt-[20px]'
          />
        </div>
        <div className='text-[25px] md:text-[25px] cursor-pointer'>
          {/* Song name */}
          <div className='text-black text-[1em] items-center  md:text-[1.2em] mt-[10px] font-semibold'>
            {songsData[index].name}
          </div>
          {/* Singer */}
          <div className='text-gray-700 text-[0.7em]  items-center  md:text-[1em]  font-semibold'>
            {songsData[index].singer}
          </div>
        </div>
      </div>
      
      {!playingSong ? (
    <div
      className='w-[70px] h-[70px] rounded-full bg-white flex
       justify-center items-center text-black hover:bg-gray-500 
       transition-all cursor-pointer'
      onClick={() => playSong()}
    >
      <MdNotStarted className='w-[90px] h-[90px] md:w-[100px] md:h-[100px]  ' />
    </div>
  ) : (
    <div
      className='w-[70px] h-[70px] rounded-full
       bg-white flex justify-center items-center
        text-black hover:bg-gray-500 transition-all 
        cursor-pointer'
      onClick={() => pauseSong()}
    >
      <FaPauseCircle className='w-[90px] h-[90px] md:w-[100px] md:h-[100px]  pb-1' />
    </div>
  )}
  </div>

      
      
  )
}

export default Player
