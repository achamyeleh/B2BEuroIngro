import React, {FC, useEffect, useState} from 'react'
import './default.css'
import axios from 'axios'
import { string } from 'yup'
import { connect } from 'react-redux';
import { getCategoriesAction, getPostsAction } from './actions';
import PropTypes from "prop-types";
import {RegistrationForm} from '../registration/RegistrationForm'

  // async function fetchMoviesJSON() {
  //   const response = await fetch('http://140.238.218.219:3001/categories');
  //   const movies = await response.json();
  //   return movies;
  // }

  interface ICategory {
    name: string;
    path: string;
  }
  interface IPost {
    author?: string;
    body: string;
    category?: string;
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
const Default:FC<Props> = (props) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [post, setPost] = useState<IPost[]>([]);

  const [form, setForm] = useState(false)

  const showForm = () => {
     return (
       <div> 
         <RegistrationForm />
    
        </div> 
       );
   }
 
  const deletePost = async (index: string) => {
      // this.setState(prevState => {
      //   return {S
      //     list: [
      //       ...prevState.list.slice(0, index),
      //       ...prevState.list.slice(index + 1),
      //     ],
      //   };
      // });
      const pos = post.filter(d => d.id != index)
      console.log('delete item method called == ', index)
      console.log('filtered post == ', pos)
     setPost([...pos])

     const res = await axios.delete(`http://140.238.218.219:3001/posts/${index}`, {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
     } );
    console.log('after delete === ',res.data)

  }

  const updateOne = async() => {
    const res = await axios.put('http://140.238.218.219:3001/posts/123457', {title:'about react'}, {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
     } );
    console.log('update === ',res.data)
    // res.data.json; // { answer: 42 }
  }
 
  const deleteOne = async() => {
    const res = await axios.delete('http://140.238.218.219:3001/posts/34342334', {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
     } );
    console.log('after delete === ',res.data)
    // res.data.json; // { answer: 42 }
  }
  const ascending = ( a: IPost, b: IPost ) =>  a.voteScore - b.voteScore
  const descending = ( a: IPost, b: IPost ) =>  b.voteScore - a.voteScore

  const ascendingTime = ( a: IPost, b: IPost ) =>  a.timestamp - b.timestamp
  const descendingTime = ( a: IPost, b: IPost ) =>  b.timestamp- a.timestamp
  
  
  const sortAsc = (by: string) => {
    if(by==="score") {
    const asc = post.sort( ascending );
  
    console.log('sort Ascending by score', post)
    console.log('asc by score ===', asc)
    setPost([...asc])
    // setPost(asc)
  } else{
  const asc = post.sort( ascendingTime );
  
    console.log('sort Ascending by time', post)
    console.log('asc by time ===', asc)
    setPost([...asc])
    // setPost(asc)
  }
  }
  const sortDesc = (by: string) => {
    if(by==="score") {
    const des = post.sort( descending );
    setPost([...des])
    console.log('sort Descending', post)
    } else {
      const des = post.sort( descendingTime );
    setPost([...des])
    console.log('sort Descending', post)
    }
  }
  useEffect(() => {
    axios.get('http://140.238.218.219:3001/categories', {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
    }).then(res => {
      console.log('categories === ', res.data.categories)
      setCategory(res.data.categories)
    })
    
//======
    axios.get('http://140.238.218.219:3001/posts', {
      headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
    }).then(res => {
      console.log('posts === ', res.data)
      setPost(res.data)

    })
    
    
  //   //==============
  //   axios.get('http://140.238.218.219:3001/:redux/posts', {
  //     headers: {
  //       'Authorization': 'Bearer ' + 'achea',
  //     }
  //   }).then(res => console.log('react posts === ', res.data))
   


  // //===
  // axios.get('http://140.238.218.219:3001/posts/8xf0y6ziyjabvozdd253nd', {
  //   headers: {
  //     'Authorization': 'Bearer ' + 'achea',
  //   }
  // }).then(res => console.log('posts by id === ', res.data))
  //===
  axios.get('http://140.238.218.219:3001/posts/8xf0y6ziyjabvozdd253nd/comments', {
    headers: {
      'Authorization': 'Bearer ' + 'achea',
    }
  }).then(res => console.log('all the comments for a one post === ', res.data))


    }, [])

    const { value, getCategoriesAction, getPostsAction } = props;

  return (
    <div className="news">
      <h1> These are our categories</h1>
      {category && category.map((dat,i)=> 
      // console.log('data =', dat.name, "   index == ", i) )
      <h1 key={i.toString()}>{dat.name}</h1>)
      }

    <h1> These are the posts</h1>
    {post && post.map((dat,i)=> 
      // console.log('data =', dat.name, "   index == ", i) )
      <li  className="posts" key={dat.id}><span>{dat.body}</span> <div className="remove-item" onClick={()=>deletePost(dat.id)}>X</div> </li>)

      }
      <div className="sort">
        <div>sort by score</div>
        <button onClick={()=>sortAsc('score')}>Ascending</button>
        <button onClick={()=>sortDesc('score')}>Descending</button>
      </div>

      <div className="sort">
        <div>sort by timestamp</div>
        <button onClick={()=>sortAsc("time")}>Ascending</button>
        <button onClick={()=>sortDesc("time")}>Descending</button>
      </div>

      <button onClick={deleteOne}>delete</button>
      <button onClick={updateOne}>update</button>
      <h1>{value}</h1>
      <button onClick={getCategoriesAction}>increment</button>
      <button onClick={getPostsAction}>decrement</button>
      <button onClick={getPostsAction}>New Post</button>
      
      
      <div className='manage-app'>
        <h1>Manage Application</h1>
        <button  onClick={() => setForm(true) }>Add New Application</button>
        <button>Change Existing Application</button>
        <button>Remove Application</button>
        {form ? showForm() : null}
        </div>




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

export default connect(mapStateToProps, mapDispatchToProps)(Default);
// export default Default;
Default.propTypes = {
  value: PropTypes.number.isRequired,
  getCategoriesAction: PropTypes.func.isRequired,
  getPostsAction: PropTypes.func.isRequired
};