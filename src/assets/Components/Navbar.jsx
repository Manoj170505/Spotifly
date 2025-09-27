import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { MdOutlineDownloading } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className='bg-[#000000] font-Inter flex flex-row p-3 text-white justify-between items-center'>
      <div className='flex flex-row gap-4 items-center'>
        <FaSpotify className='text-3xl' />
        <button className='bg-[#1e1e1e] w-12 h-12 flex justify-center items-center rounded-[50%] hover:bg-[#2a2a2a]'><RiHome5Fill className='text-3xl' /></button>
        <div className='bg-[#1e1e1e] h-12 flex flex-row gap-2 items-center p-3 rounded-4xl hover:bg-[#2a2a2a]'><GoSearch className='text-[#808080] text-2xl'/><input className='w-100 border-none focus:outline-none' type="text" placeholder='What do you want to play?'/></div>
      </div>
      <div className='p-3 rounded-4xl flex flex-row gap-4 items-center text-[#b3b3b3]'>
        <a className='flex flex-row gap-3 justify-center items-center text-m hover:text-[#e4e4e4] hover:scale-105 hidden md:block' href="https://open.spotify.com/download" target='__blank'><MdOutlineDownloading />Install App</a>
        <p className='hover:text-[#e4e4e4] hover:scale-105 cursor-pointer hidden md:block'>Signup</p>
        <button className='bg-[#f0f0f0] text-[#000000] rounded-full w-[100px] transition duration-200 ease-in-out transform hover:scale-105'>Login</button>
      </div>
    </div>
  )
}
