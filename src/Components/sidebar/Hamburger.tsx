import React from 'react'
import PropTypes from "prop-types";
import './sidebar.css'

const Hamburger: React.FC<{ click (): void }> = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </button>
  
  )
}
export default Hamburger;

Hamburger.propTypes = {
  click: PropTypes.func.isRequired,
};