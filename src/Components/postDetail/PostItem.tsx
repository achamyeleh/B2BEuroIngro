import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'
import Comment from './Comment'
import './postItem.css'

interface Props {
  author?: string;
  body?: string;
  category?: string;
  commentCount?: number;
  deleted?: false;
  id?:  string;
  timestamp: number;
  title?: string;
  voteScore?: number;
}
interface IComment {
  author?: string;
  body: string
  id:  string;
  timestamp: number;
  voteScore: number;
  deleted: boolean;
  parentDeleted: boolean;
  parentId: string;
}


const PostItem:React.FC<Props> = (props) => {
  const [comment, setComment] = useState<IComment[]>([]);  
  const {id} = props //8xf0y6ziyjabvozdd253nd
  useEffect(() => {
    axios.get(`http://140.238.218.219:3001/posts/${id}/comments`, {
      headers: {
        'Authorization': 'Bearer ' + 'achea',
      }
    }).then(res => {
      console.log('all the comments for a one post iteemmmmm === ', res.data)
      setComment(res.data)
    })
   }, [])
  return (
    <div className="items">
      <div>
        <PersonIcon/>
        <span>{props.author}</span>
      </div>
      <div className="title">
        {props.title}
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
        <span className="addComment">
          +
        </span>
        <span className="edit"> <EditIcon /> </span>
        <span className="delete"> X </span>
      </div> 
      {
        comment && comment.map((com, ind)=><Comment key={ind} author={com.author} body ={com.body} voteScore={com.voteScore} timestamp={com.timestamp} />)
      }    
    </div>
  )
}

export default PostItem

  PostItem.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  commentCount: PropTypes.number,
  id:  PropTypes.string,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string,
  voteScore: PropTypes.number,
};