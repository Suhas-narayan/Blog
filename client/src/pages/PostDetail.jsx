import React,{useContext,useEffect,useState} from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'
import Loader from '../components/Loader'
import DeletePost from './DeletePost'
import { UserContext } from '../context/userContext'





const PostDetail = () => {

  const{id} =useParams()
  const[post ,setPost] =useState(null)
  // const[creatorID ,setCreatorID] =useState(null)
  const[error ,setError] =useState(null)
  const[isLoading ,setIsLoading] =useState(false)

  const {currentUser} = useContext(UserContext)


  useEffect(()=>{
    const getPost = async()=>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response.data)
        // setCreatorID(response.data.creator)

      } catch (error) {
        setError(error)
        
      }
      setIsLoading(false)
    }

    getPost();

  }, [])



  if(isLoading){
    return <Loader/>
  }

  return (
   <section className="post-detail">
{error && <p className='error'>{error}</p>}

    {post && <div className="container post-detail_container">
      <div className="post-detail_header">
        <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>

        {currentUser?.id == post?.creator && 
        <div className="post-detail_buttons">
          <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
           <DeletePost postID={id} />
        </div>
        }


      </div>
    <h1>{post.title} </h1>
    <div className="post-detail_thumbnail">
      <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
    </div>

    <p dangerouslySetInnerHTML={{__html: post.description}}></p>

    </div>}
   </section>
  )
}

export default PostDetail





// import React, { useEffect, useState, useContext } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import Loader from '../components/Loader';
// import DeletePost from './DeletePost';
// import { UserContext } from '../context/userContext';

// const PostDetail = () => {
//   const { id } = useParams();
//   console.log("Extracted ID:", id); // Log the extracted ID
//   const [post, setPost] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const { currentUser } = useContext(UserContext);

//   useEffect(() => {
//     console.log('id:', id); // Check if id is correctly extracted

//     const fetchPost = async () => {
//       if (!id) {
//         setError(new Error("Post ID is not defined"));
//         return;
//       }

//       setIsLoading(true);
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`);
//         // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts?id=${post._id.$oid}`);

//         setPost(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <p className="error">{error.message}</p>;
//   }

//   if (!post) {
//     console.log('post is null'); // Check if post is null
//     return <p>No post found with ID: {id}</p>;
//   }
  
//   console.log('post:', post);

//   return (
//     <section className="post-detail">
//       <div className="container post-detail_container">
//         <div className="post-detail_header">
//           {currentUser && currentUser.id === post.creator && (
//             <div className="post-detail_buttons">
//               <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
//               <DeletePost />
//             </div>
//           )}
//         </div>
//         <h1>{post.title}</h1>
//         <p>Category: {post.category}</p>
//         <div className="post-detail_thumbnail">
//           <img src={post.thumbnail} alt={post.title} />
//         </div>
//         <p>Description: {post.description}</p>
//         <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
//         <p>Updated At: {new Date(post.updatedAt).toLocaleString()}</p>
//       </div>
//     </section>
//   );
// };

// export default PostDetail;

