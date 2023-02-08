import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import request from "../Request"

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Row rId="1" title="Upcoming" fetchURL={request.requestUpcoming}/>
      <Row rId="2" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rId="3" title="Popular" fetchURL={request.requestPopular}/>
      <Row rId="4" title="Trending" fetchURL={request.requestTrending}/>
      
  
    </div>
  )
}

export default Home