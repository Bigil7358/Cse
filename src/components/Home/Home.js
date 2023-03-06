import React from 'react'
import Navbar from '../Navbar/Navbar';
import svcet from './svcet.jpg';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <img class="logo" src={svcet} alt="svcetlogo"/>
    </div>
  )
}

export default Home
