import React from 'react'
import { useParams, Link } from 'react-router-dom'
import api from './api/posts'

import { useContext } from 'react'
import DataContext from './context/DataContext'

const SinglePost = () => {

  const {posts, setPosts, navigate} = useContext(DataContext)

    const { id } = useParams()
    const singlePost = posts.find(post => post.id == id) 


    const handleDelete = async (id) => {
      const deletePost = posts.filter(post => (post.id).toString() !== id)
  
      try {
        await api.delete(`/posts/${id}`)
        setPosts(deletePost)
        navigate('/')
        
      } catch (err) {
        console.log(err)
      }
    }

  return (
    <>
    {singlePost?.edited && <p>Edited</p>}
    <div>{singlePost?.title}</div>
    <video src={singlePost?.videoSrc} controls/>
    <div>{singlePost?.body}</div>
    <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
      <Link to={`/edit/${id}`}><button>Edit post</button></Link>
      <button onClick={() => handleDelete(id)}>Delete post</button>
      <Link to='/'><button>go back to homepage</button></Link>
    </div>
    </>
  )
}

export default SinglePost