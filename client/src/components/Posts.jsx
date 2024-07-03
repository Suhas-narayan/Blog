import React, { useEffect, useState } from 'react'


import PostItem from './PostItem'
import Loader from './Loader'
import axios from 'axios';



// const DUMMY_POSTS = [
// {
// id: '1',
// thumbnail: Thumbnail1,
// category: 'education',
// title: 'This is the title of the very first post on this blog.',
// desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
// authorID: 3
// },
// {
//     id: '2',
//     thumbnail: Thumbnail2,
//     category: 'science',
//     title: 'This is the title of the very first post on this blog.',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
//     authorID: 1
//     },
//     {
//         id: '3',
//         thumbnail: Thumbnail3,
//         category: 'science',
//         title: 'This is the title of the very first post on this blog.',
//         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
//         authorID: 3
//         },

//         {
//             id: '4',
//             thumbnail: Thumbnail4,
//             category: 'science',
//             title: 'This is the title of the very first post on this blog.',
//             desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium, aut iure aliquam excepturi consequatur harum cum vero earum voluptas in consectetur! Voluptates harum quia quo impedit id et illum hic amet eveniet tenetur dolorem non ex reprehenderit cupiditate beatae ullam, vitae eos quos doloribus nobis? Qui ab quisquam debitis saepe earum accusantium, eaque asperiores doloribus neque, dolores velit modi aliquam tempore magnam ut. Ex molestiae aliquid error commodi numquam ab repudiandae sunt modi dignissimos velit, repellat, tenetur cumque perspiciatis consequatur nemo voluptatibus quia nisi hic. Ab veritatis recusandae fuga?',
//             authorID: 2
//             },

// ]

const Posts = () => {
    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    
    const fetchPosts =  async()=>{

      setIsLoading(true);
      try {

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        setPosts(response?.data)

      } catch (err) {
        console.log(err)
        
      }
      setIsLoading(false)

    }
    fetchPosts();


  },[])

  if(isLoading){
    return <Loader/>
  }

  return (

    <section className='posts'>

        <h1 className='test1'>Articles</h1>
        <p className='test'>Discover The Latest Trends and insights in our featured articles</p>


        {posts.length >0 ?
        <div className="container posts_container">
        {
         posts.map(({ _id :id ,thumbnail,category,title,description,creator,createdAt}) =><PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator}  createdAt={createdAt}/>)
         }
      

        </div> :<h2 className='center'>No Posts Found</h2>}
    </section>
  )
}

export default Posts
