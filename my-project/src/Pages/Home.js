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
      <Row title="Upcoming" fetchURL={request.requestUpcoming}/>
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
      <Row title="Popular" fetchURL={request.requestPopular}/>
      <Row title="Trending" fetchURL={request.requestTrending}/>
      
  
    </div>
  )
}

export default Home