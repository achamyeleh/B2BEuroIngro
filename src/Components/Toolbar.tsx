import React from 'react'
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Grid from './DisplayGrid'
import '../styles/header.css'
import BusinessIdea from './BusinessIdea'
import {RegistrationForm} from './RegistrationForm'
import AboutUs from './AboutUs'
import News from './News'
import Hamburger from './sidebar/Hamburger'
import logo from '../images/gollem.png'

// eslint-disable-next-line react/prop-types
const Toolbar: React.FC<{sidebarClickHandler:()=>void}> = (props) => {

  return ( 
		<Router>
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
	
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/youtubers' component={RegistrationForm} />
				<Route path='/report' component={Grid} />
				<Route path="/businessIdea" component={BusinessIdea} />
				<Route path='/news' component={News} />
				<Route path='/aboutUs' component={AboutUs} />
			</Switch>
		</Router>
	
  )
}

const Home =() => (
	<div >
		<img className="logo" src={logo} alt="logo"/>
	</div>
)

export default Toolbar

Toolbar.propTypes = {
	sidebarClickHandler: PropTypes.func.isRequired
}