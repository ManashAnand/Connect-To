import React from 'react'
import './About.css'
import Card from '../Card/Card'

import manash from '../../assets/manash.jpg'

const About = () => {
  return (
    <>
    <div className="aboutConatiner">

     <div className="about">
        <div className='about_about'>About</div>
        <div className="about_desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla pariatur deleniti iure dignissimos iste fuga aliquid officia hic ad voluptatem minus fugiat voluptates dicta ratione deserunt praesentium, quae ab quo...
        </div>
     </div> 

     <div className="cardContainer">
        <Card name={manash} FullName="Manash Anand"/>
        <Card/>
        <Card/>
        <Card/>
     </div>
    </div>
    </>
  )
}

export default About
