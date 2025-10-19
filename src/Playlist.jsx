import React from 'react'
import Player from './components/Player'
import { useSelector } from 'react-redux'
import { songsData } from './songs'
import Card from './components/Card';


function Playlist() {

  let songs = useSelector(state => state.playlist)


  return (
    <div className='w-full h-[100vh]  bg-gray-900 flex
    justify-start items-center flex-col pl-[20px] pt-[20px] md:pt[100px]
    gap-[30px]'>
      <Player/> 

      {!songs.length<1?<>
         <h1 className='text-white font-semibold text-[30px] flex
      justify-start text-center md:mt-20'> Playlist </h1>
      <div className='w-full md:h-full h-[65%] flex flex-col
      justify-start items-start gap-[5px] overflow-auto'>

          {songs.map((song) => {
            return(
            <Card 
            name={song.name} 
            image={song.image}
            singer={song.singer} 
            songIndex={song.songIndex} />)
          })}
      </div>
        </>
        :
        <div className='text-[30px] text-gray-500
       flex justify-center items-center mt-60 md:m-[200px]'>No Songs In Playlist</div> 
        }
     
    </div>
  )
}

export default Playlist
