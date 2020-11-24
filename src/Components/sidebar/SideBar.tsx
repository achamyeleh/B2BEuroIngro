import React from 'react'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import './sidebar.css'

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

    <nav className={sidebarClasses}>
      <ul>
        <li onClick={props.click}><Link className="item" to = "/youtubers"> Youtubers </Link></li>
        <li onClick={props.click}><Link className="item"  to= "/businessIdea"> Business Idea </Link> </li>
        <li onClick={props.click}><Link className="item"  to= "/news"> News </Link> </li>
        <li onClick={props.click}><Link className="item"  to= "/aboutUs"> About Us </Link> </li>
      </ul>
    </nav>

  )

}

export default SideBar;

SideBar.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}


