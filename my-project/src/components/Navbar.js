import React, { useState } from 'react'
import{BiSearch} from "react-icons/bi";
import {MdOutlineNotificationsActive} from "react-icons/md"
import profile from "../assets/profile.png"



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll=()=>{
    setIsScrolled(window.scrollY===0 ? false : true)
    return ()=>(window.onscroll=null)
  }
  return (
  
      <div className={`${isScrolled ? "bg-black/30" : ""} flex items-center bg-black justify-between p-4 z-[100] w-full fixed top-0`}>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer ml-6 inline-block font-sans'>Netflix</h1>
        <div className='flex justify-center items-center gap-3'>
            <button className='text-white pr-4'><BiSearch/></button>
            <button className='cursor-pointer text-white'><MdOutlineNotificationsActive/></button>
            <button><img src={profile} alt="profile" className='w-[50px] mx-[3rem]' /></button>
        </div>

    </div>
  
  )
}

export default Navbar