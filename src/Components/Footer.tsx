import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import '../App.css'

export const Footer: React.FC =() => {
    return (
        <div className="footer">
        <CopyrightIcon /> GollemTimes srl
        <a href="https://www.facebook.com/"> <FacebookIcon /> </a>
        <a href="https://twitter.com/"> <TwitterIcon /> </a>
        <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
        <a href="https://www.linkedin.com/"> <LinkedInIcon /> </a>
        </div>
    )
}