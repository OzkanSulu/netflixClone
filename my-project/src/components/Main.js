import React, { useEffect, useState } from 'react'
import axios from 'axios'
import request from "../Request"

export default function Main() {
    const [movies,setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(request.requestPopular).then(
            (res)=>{
            setMovies(res.data.results)
            }
        )
    },[])
    
    const truncateString = (str,numb) =>{
        if(str?.length >numb){
            return str.slice(0,numb) + "..."
        }
        else{
            return str
        }
    }
  return (
    <div className='w-full h-[550px] text-white relative' >
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-fit' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
        
       <div className='absolute w-full top-[40%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
       <div className='my-8'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <div>
            <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
        </div>
        <div >
            <p className='w-full md:max-w-[70%] lg:max-w-[40%] text-gray-400'>{truncateString(movie?.overview,140)}</p>
        </div>
       </div>
        
        
        
        </div>
        
        </div>
  )
}
