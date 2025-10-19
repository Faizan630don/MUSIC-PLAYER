import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom";
function Nav() {
  return (
    <div className='w-full h-[75px] fixed 
     bottom-0 md:top-0 text-white flex  bg-gray-900 justify-around
      md:justify-center items-center gap-[50px] z-30  rounded-t-[20px]'>
        <Link to={"/"}>
      <IoHome className='w-[20px] h-[20px]' />
</Link>
      <Link to={"/search"}><FaSearch className='w-[20px] h-[20px]'/></Link>
      <Link to={"/playlist"}><RiPlayListAddLine  className='w-[20px] h-[20px]'/></Link>
      <Link to={"/liked"}><FaHeart className='w-[20px] h-[20px]' /></Link>
    </div>
  )
}

export default Nav
