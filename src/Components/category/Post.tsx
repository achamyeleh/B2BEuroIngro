import React, {useEffect} from 'react'
import PropTypes from "prop-types";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import './post.css'

interface Props {
  author?: string;
  body?: string;
  // timestamp: number;
  // voteScore?: number;
}

const Post:React.FC<Props> = (props) => (
    <div className="postItem">
      <div>
        <span>{props.author}</span>
      </div>
      <div className="bod">
        {props.body}
      </div>
      {/* <div>
        <span>
          {props.voteScore}
        </span>
        <span className="time">
          <AccessTimeIcon />
          {new Date(props.timestamp).toLocaleString()}
        </span> 
      </div> */}
    </div>
  )

export default Post

  Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  // timestamp: PropTypes.number.isRequired,
  // voteScore: PropTypes.number,
};