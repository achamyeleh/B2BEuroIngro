import React from 'react'
import PropTypes from "prop-types";
import './sidebar.css'

const BackDrop: React.FC<{click (): void}> = (props) => {
  return (
    <div className="backdrop" onClick={props.click}>
      
    </div>
  )
}

export default BackDrop;
BackDrop.propTypes = {
  click: PropTypes.func.isRequired,
};