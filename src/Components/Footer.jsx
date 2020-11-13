import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import '../App.css'
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetYoutbers {
    youtubers {
      
      firstName
    }
  }
`;

export const Footer = () => {
  const { loading, error, data } = useQuery(GET_DOGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    if(data)
  {
    console.log(data)
    data.youtubers.map(yt=>console.log("youtuber == ", yt.firstName))
    // console.log(ss)
  }
      
    // data.map(s=>console.log(s.sex))
  return (
 
    <div>
    {/* {data.dogs.map(dog => (
      <option key={dog.id} value={dog.breed}>
        {dog.breed}
      </option>
    ))} */}
    {/* {JSON.stringify(data)} */}
  {data.youtubers.map(y=><h3 key={y.id}>{y.firstName}</h3>)}
    
 </div>
);
  }
// export const Footer: React.FC =() => {
//     return (
//         <div className="footer">
//         <CopyrightIcon /> GollemTimes srl
//         <a href="https://www.facebook.com/"> <FacebookIcon /> </a>
//         <a href="https://twitter.com/"> <TwitterIcon /> </a>
//         <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
//         <a href="https://www.linkedin.com/"> <LinkedInIcon /> </a>
//         </div>
//     )
// }