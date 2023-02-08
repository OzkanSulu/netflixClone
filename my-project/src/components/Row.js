import axios from "axios";
import React, { useEffect, useState,useRef } from "react";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"


export default function Row({ title, fetchURL,rId }) {
  const [movies, setMovies] = useState([]);
  const slideRef = useRef()

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () =>{
    let slider = document.getElementById("slider" + rId)
    slider.scrollLeft=slider.scrollLeft-500;
  }
  const slideRight = () =>{
    let slider = document.getElementById("slider" + rId)
    slider.scrollLeft=slider.scrollLeft+500;
  }

  return (
    <div className="text-white relative">
      <h2 className=" font-bold md:text-[36px] p-6 ml-8">{title}</h2>
      <div className="relative flex items-center">
        <MdChevronLeft onClick={slideLeft} className="opacity-20 hover:opacity-100 cursor-pointer z-10"  size={40}/>
      <div id={"slider" + rId} ref={slideRef} className="w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => {
            return (
             <Movie item={item} id={id}/>
            );
          })}
        </div>
        <MdChevronRight onClick={slideRight} className="opacity-20 hover:opacity-100 cursor-pointer z-10" size={40}/>
      </div>
    </div>
  );
}
