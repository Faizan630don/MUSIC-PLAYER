import React, { useContext, useEffect, useRef, useState } from 'react'
import { songsData } from './songs'
import './index.css'
import musicanim from "./assets/musicanim.webp";
import { BiSolidSkipPreviousCircle, BiSolidSkipNextCircle } from "react-icons/bi";
import { MdNotStarted } from "react-icons/md";
import { FaPauseCircle } from "react-icons/fa";
import { datacontext } from './context/UserContext';
import { MdKeyboardArrowDown } from "react-icons/md";
import Card from './components/Card';
import Player from './components/Player';

function Home() {
  const { audioRef, playingSong, playSong, pauseSong, nextSong, index, prevSong } = useContext(datacontext)
  let [range, setRange] = useState(0)
  let progress = useRef(null);
  let [arrow, setArrow]=useState(false)

  // update slider as song plays
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration) {
        const progressPercentage =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setRange(progressPercentage);
        if (progress.current) {
          progress.current.style.width = `${progressPercentage}%`
        }
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, [audioRef]);

  // when user drags slider
  function handleRange(e) {
    let newRange = e.target.value;
    setRange(newRange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newRange) / 100;
  }

  return (
    
    <div className='w-full h-screen bg-gray-900  flex relative overflow-hidden'>
      <MdKeyboardArrowDown className={`absolute text-white top-[20px] left-[10%]
       text-[20px] md:hidden ${arrow?"rotate-[-90deg]":null} cursor-pointer`} 
       onClick={()=>setArrow(prev=>!prev)} />
       {!arrow?<>
        <div className='w-full md:w-1/2 h-full flex flex-col items-center gap-5 md:pt-[120px]'>
        <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>
        
        {/* Song Thumbnail */}
        <div className='w-[80%] max-w-[250px] h-[250px] rounded-md overflow-hidden relative'>
          <img src={songsData[index].image} alt='' className='w-full h-full object-cover'/>
          {playingSong && (
            <div className='w-full h-full bg-black absolute top-0 opacity-50 flex justify-center items-center'>
              <img src={musicanim} alt='' className='w-[50%]'/>
            </div>
          )}
        </div>

        {/* Song Info */}
        <div className='text-white text-[20px] font-bold text-center'>
          {songsData[index].name}
        </div>
        <div className='text-gray-400 text-[10px] font-bold text-center'>
          {songsData[index].singer}
        </div>

        {/* Progress Slider */}
        <div className='w-1/2 flex justify-center items-center relative'>
          <input
            id="range"
            type="range"
            value={range}
            onChange={handleRange}
            className="w-full h-1 appearance-none bg-gray-600 rounded-md"
          />
          <div className="bg-white h-1 absolute left-0" ref={progress}></div>
        </div>

        {/* Controls */}
        <div className='text-white flex justify-center items-center gap-8'>
          <BiSolidSkipPreviousCircle
            className='w-[30px] h-[30px] hover:text-gray-500 cursor-pointer'
            onClick={prevSong}
          />

          {!playingSong ? (
            <div
              className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center text-black hover:bg-gray-500 cursor-pointer'
              onClick={playSong}
            >
              <MdNotStarted className='w-[30px] h-[30px]'/>
            </div>
          ) : (
            <div
              className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center text-black hover:bg-gray-500 cursor-pointer'
              onClick={pauseSong}
            >
              <FaPauseCircle className='w-[30px] h-[30px]'/>
            </div>
          )}

          <BiSolidSkipNextCircle
            className='w-[30px] h-[30px] hover:text-gray-500 cursor-pointer'
            onClick={nextSong}
          />
        </div>
      </div>
       </>: 
         <div className='w-full md:w-1/2 h-full 
         items-center
         flex pt-[40px] flex-col pb-[150px] relative  overflow-auto'>
          <Player/>
        {songsData.map((song, i) => (
          <Card
            key={song.id}
            name={song.name}
            image={song.image}
            singer={song.singer}
            songIndex={i}
          />
        ))}
      </div>
       }
         <div className=' md:w-[50%] md:h-full 
         md:items-center
         hidden 
         md:flex md:pt-[70px] md:flex-col md:pb-[150px]  md:overflow-auto
         '>
        {songsData.map((song, i) => (
          <Card
            key={song.id}
            name={song.name}
            image={song.image}
            singer={song.singer}
            songIndex={i}
          />
        ))}
      </div>
     
    
    </div>
  )
}

export default Home
