import React, {useEffect} from 'react'
import PropTypes from "prop-types";
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import './comment.css'

interface Props {
  author?: string;
  body?: string;
  timestamp: number;
  voteScore?: number;
}

const Comment:React.FC<Props> = (props) => (
    <div className="comment">
      <div>
        <PersonIcon/>
        <span>{props.author}</span>
      </div>
      <div className="body">
        {props.body}
      </div>
      <div>
        <ThumbUpIcon />
        <span>
          {props.voteScore}
        </span>
        <span className="time">
          <AccessTimeIcon />
          {new Date(props.timestamp).toLocaleString()}
        </span>
        <span className="delete"> X </span>
        <span className="edit"> <EditIcon /> </span>
      </div>
    </div>
  )

export default Comment

  Comment.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number,
};