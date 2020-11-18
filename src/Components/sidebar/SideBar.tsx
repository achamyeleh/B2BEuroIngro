import React from 'react'
import PropTypes from "prop-types";
import './sidebar.css'
import {Link} from 'react-router-dom'
import Grid from '../DisplayGrid'
import BusinessIdea from '../BusinessIdea'
import {RegistrationForm} from '../RegistrationForm'
import AboutUs from '../AboutUs'
import News from '../News'
import logo from '../../images/gollem.png'
// import Routing from '../Routing'

interface Props {
  show:boolean
  click (): void
}
 const SideBar:React.FC<Props> = (props) => {
  let sidebarClasses = 'side-bar'
     if (props.show) {
       sidebarClasses = 'side-bar open'
     }
   return (
      // <nav className={sidebarClasses}>
      //   <ul >
      //     <li><a href ="#">this </a></li>
      //     <li><a href ="#">that </a></li>

      //   </ul>
      //   </nav>

      <nav className={sidebarClasses}>
        <div onClick={props.click}>
        <Link className="link-item" to = "/youtubers"> Youtubers </Link>
        </div>
        <div onClick={props.click}>
        <Link className="link-item" to = "/report"> Report  </Link>
        </div>
        <div onClick={props.click}>
        <Link className="link-item" to= "/businessIdea"> Business Idea </Link>
        </div>
        <div onClick={props.click}>
        <Link className="link-item" to= "/news"> News </Link>
        </div>
        <div onClick={props.click}>
        <Link className="link-item" to= "/aboutUs"> About Us </Link> 
        </div>
      </nav>
 
   )

}

export default SideBar;

const Home =() => (
	<div >
		<img className="logo" src={logo} alt="logo"/>
	</div>
)

SideBar.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}


