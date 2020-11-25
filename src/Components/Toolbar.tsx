import React from 'react'
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../styles/header.css'
import PostDetail from './postDetail/PostDetail'
import {RegistrationForm} from './registration/RegistrationForm'
import Category from './category/Category'
import News from './default/Default'
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
			</div>
			<div className ="navigation-items">
				<Link className="link-item" to = "/youtubers"> Posts </Link>
				<Link className="link-item" to= "/postDetail"> Post Detail </Link>
				<Link className="link-item" to= "/"> Default </Link>
				<Link className="link-item" to= "/category"> Category </Link> 
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