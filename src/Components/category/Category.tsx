import React, {FC, useEffect, useState} from 'react'
import './category.css'
import axios from 'axios'
import { connect } from 'react-redux';
import { getCategoriesAction, getPostsAction } from '../default/actions';
import Post from './Post'
import PropTypes from "prop-types";

  interface ICategory {
    name: string;
    path: string;
  }
  interface IPost {
    author?: string;
    body: string;
    category: string;
    commentCount?: number;
    deleted?: false;
    id:  string;
    timestamp: number;
    title?: string;
    voteScore: number;
  }

  interface Props {
    value: number;
    getCategoriesAction(): void;
    getPostsAction():void;
  }
 
const Category:FC<Props> = (props) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [post, setPost] = useState<IPost[]>([]);

  const showPosts = (cat: string) => {
    const posts = post.filter(data => data.category == cat)
    return(
      <div>
        { 
        posts && posts.map((p, ind) => 
        <div key={ind}> 
          <Post  author={p.author} body={p.body} />
        </div> ) 
        }
      </div>
    )
  }
 
  useEffect(() => {

    axios.get('http://140.238.218.219:3001/categories', {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
    }).then(res => { setCategory(res.data.categories) })
    

    axios.get('http://140.238.218.219:3001/posts', {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
    }).then(res => { setPost(res.data) })

    }, [])

    const { value, getCategoriesAction, getPostsAction } = props;

  return (
    <div className="mainCat">
      <h1> These are our categories</h1>
      { 
        category && category.map((dat,ind)=> 
        <h1 className="category"  key={ind.toString()}>{dat.name}  {showPosts(dat.name)} </h1>)
      }

{/*      
      <h1>{value}</h1>
      <button onClick={getCategoriesAction}>increment</button>
      <button onClick={getPostsAction}>decrement</button>
      <button onClick={getPostsAction}>New Post</button> */}

    </div>
  )
}

const mapStateToProps = (state:{value:number}) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => ({
  getCategoriesAction: () => dispatch(getCategoriesAction()),
  getPostsAction: () => dispatch(getPostsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);

Category.propTypes = {
  value: PropTypes.number.isRequired,
  getCategoriesAction: PropTypes.func.isRequired,
  getPostsAction: PropTypes.func.isRequired
};