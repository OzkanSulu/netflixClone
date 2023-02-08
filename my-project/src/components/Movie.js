import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"

export default function Movie({item,id}) {
    const [like,setLike] = useState(true)

  return (
    <div key={id}
    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px inline-block cursor-pointer] mx-3 relative cursor-pointer"
   
  >
    <img
      className="w-full h-auto block"
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/40 opacity-0 hover:opacity-95 text-grey flex  text-center align-center justify-center">
      <p className=" white-space-normal text-sm md:text-sm font-bold flex justify-center items-center">{item.title}</p>
      <p> {like ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />} </p>  
    </div>
  </div>
  )
}
