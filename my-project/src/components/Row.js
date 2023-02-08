import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";


export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="text-white relative">
      <h2 className=" font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
      <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hidden relative">
          {movies.map((item, id) => {
            return (
             <Movie item={item} id={id}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}
