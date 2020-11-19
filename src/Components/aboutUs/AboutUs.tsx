import React from 'react'
import logo from '../../images/logo.png';
import './aboutUs.css'

const AboutUs: React.FC=() =>{

  return (
    <div className="aboutUs">
      <h3> About GollemTimes</h3>
      <div>
        <img className="banner" src ={logo}  alt="img" />
      </div>

      <h2>This website gives multiple services for clients</h2>
      <ul>
        {/* <li> website design</li>
        <li>mobile app development</li>
        <li>marketing and commerical</li>
        <li>business idea</li> */}
        <li>informative materials</li>
        <li>breaking news</li>
        <li>youtuber support</li>   
      </ul>
      
      <h2>ይኼ ድህረ ገጽ ለደንበኞቹ ከሚሰጣቸው አገልግሎቶች ውስጥ በጥቂቱ </h2>
      <ul>
        {/* <li> የዌይብ ሳይት ድይዛይን</li>
        <li>የተለያዩ የሞባይል አፕፕ ስራ</li>
        <li>የማስታወቂያ ስራ</li>
        <li>የስራ ፈጠራ ሀሳቦች</li> */}
        <li>አስተማሪ መረጃወች</li>
        <li>ትኩስ ዜናዎችን</li>
        <li>ዩቱበሮችን ማገዝ</li> 
      </ul>
  </div>
  )
}

export default AboutUs;