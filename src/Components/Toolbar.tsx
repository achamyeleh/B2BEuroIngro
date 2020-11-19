import React from 'react'
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Grid from './grid/DisplayGrid'
import '../styles/header.css'
import BusinessIdea from './businessIdea/BusinessIdea'
import {RegistrationForm} from './registration/RegistrationForm'
import AboutUs from './aboutUs/AboutUs'
import News from './news/News'
import Hamburger from './sidebar/Hamburger'
import logo from '../images/gollem.png'

// eslint-disable-next-line react/prop-types
const Toolbar: React.FC<{sidebarClickHandler:()=>void}> = (props) => {

  return ( 
			<nav>
			<div className="hamburger-btn">
				<Hamburger click ={props.sidebarClickHandler} />  
			</div>  
			<div className="logo-icon">
				<Home />
			</div>
			<div className ="navigation-items">
				<Link className="link-item" to = "/youtubers"> Youtubers </Link>
				<Link className="link-item" to = "/report"> Report  </Link>
				<Link className="link-item" to= "/businessIdea"> Business Idea </Link>
				<Link className="link-item" to= "/news"> News </Link>
				<Link className="link-item" to= "/aboutUs"> About Us </Link> 
			</div>
			</nav>
	
		
	
  )
}

const Home:React.FC =() => (
	<div >
		<img className="logo" src={logo} alt="logo"/>
	</div>
)

export default Toolbar

Toolbar.propTypes = {
	sidebarClickHandler: PropTypes.func.isRequired
}