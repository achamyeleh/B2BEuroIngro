import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import SendIcon from '@material-ui/icons/Send';
import './footer.css'
import { gql, useQuery } from '@apollo/client';
import { string } from 'prop-types';
import logo from '../../images/gollem.png'


const GET_DOGS = gql`
  query GetYoutbers {
    youtubers {
      
      firstName
    }
  }
`;

const Footer:React.FC = () => {
  // const { loading, error, data } = useQuery(GET_DOGS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  //   if(data)
  // {
  //   console.log(data)
  //   data.youtubers.map((resp: { firstName: string; }) => console.log("youtuber == ", resp.firstName))
  // }  
    // data.map(s=>console.log(s.sex))
    {/* {data.youtubers.map((resp: {id: number, firstName: string})=><h3 key={resp.id}>{resp.firstName}</h3>)} */}
  return (
 
    <div className="footer">
       <div className="footer-logo">
      <a><img src={logo} style={{width:'30px', height:'30px'}} alt="GollemTimes" /> </a>
      </div>
      <div className="footer-social col1">
      <a href="https://www.facebook.com/" > <FacebookIcon /> </a>
      <a href="https://twitter.com/"> <TwitterIcon /> </a>
      <a href="https://t.me/joinchat/OUqbYleBmqt54m7STXfLPg/"> <SendIcon /> </a>
      <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
      <a href="https://www.linkedin.com/"> <LinkedInIcon /> </a>
      </div>
      <div className="footer-links col2">
        <a href ="#" >Careers</a>
        <a href ="#" >Support</a>
        <a href ="#" >Privace Policy</a>
      </div>
      <div className="footer-cta">
        <a href ="#" className="button">Request Invite</a>
        <div className="footer-copyright">
          &copy; GollemTimes, All rights resereved
        </div>
      </div>
    </div>
);
}

export default Footer;