import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",maxLines :"100%"}}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home