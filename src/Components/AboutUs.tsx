import React from 'react'
import logo from '../images/logo.png';

const AboutUs: React.FC=() =>{

    return (
    <div>
        <h3> About GollemTimes</h3>
        <div>
            <img src ={logo}  alt="img" />
        </div>

        <p>This website gives multiple services for clients</p>
        <ul>
            <li> website design</li>
            <li>mobile app development</li>
            <li>marketing and commerical</li>
            <li>business idea</li>
            <li>informative materials</li>
            <li>breaking news</li>
            <li>youtuber support</li>  
            
        </ul>
        
        <p style ={{margin:20}}>ይኼ ድህረ ገጽ ለደንበኞቹ ከሚሰጣቸው አገልግሎቶች ውስጥ በጥቂቱ </p>
            <li> የዌይብ ሳይት ድይዛይን</li>
            <li>የተለያዩ የሞባይል አፕፕ ስራ</li>
            <li>የማስታወቂያ ስራ</li>
            <li>የስራ ፈጠራ ሀሳቦች</li>
            <li>አስተማሪ መረጃወች</li>
            <li>ትኩስ ዜናዎችን</li>
            <li>ዩቱበሮችን ማገዝ</li>

        
    </div>
    
    )
}
export default AboutUs;