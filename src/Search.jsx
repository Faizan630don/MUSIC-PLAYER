import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Player from './components/Player'
import Card from './components/Card';
import { songsData } from './songs';



function Search() {
let [input, setInput]=useState("");
let [newList, setNewlist]=useState([])
    useEffect(()=> {
       let a=songsData.filter((song)=>(song.name.toLowerCase().includes(input)
      || (song.singer.toLowerCase().includes(input)) || (song.singer.toUpperCase().includes(input))));
       setNewlist(a);
    }, [input])
  return (
    <div className='bg-gray-900 w-[100%] h-[100vh] flex
    justify-start items-center flex-col md:pt-[100px] pt-[20px] 
    gap-[30px]
    '>
        <Player/>
      
    <form action="" className='w-[90%] md:max-w-[60%] h-[60px]
    bg-gray-800 flex md:justify-center md:items-center gap-5 overflow-hidden
    rounded-lg' onSubmit={(e)=> {
      e.preventDefault();

    }}>
      <FaSearch className='text-gray-200 TEXT-[20PX] mt-5 ml-10 md:mr-8 mb-5' />
      <input type='text' className='w-[90%] h-[100%] bg-gray-800
      outline-none border-0 text-white md:p-[10px]  text-[20px]'
      placeholder='Search Songs ' onChange={(e)=>setInput(e.target.value)}
      value={input}/>
      </form>

      {input?
       <div className='w-[100%] md:h-[100%]  h-[70%] flex flex-col justify-start p-[10px]
      items-center gap-5 overflow-auto'>
        {newList.map((song)=>(
          <Card name={song.name} image={song.image}
           singer={song.singer} songIndex={song.id-1}/>
        ))};
      </div>
      :<div className='text-[30px] text-gray-500
       flex justify-center items-center mt-60 md:m-[200px]'>Search Song 🎵</div>
    }

     
    </div>
  )
}

export default Search
