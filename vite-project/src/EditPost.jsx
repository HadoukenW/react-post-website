import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useContext } from 'react'
import DataContext from './context/DataContext'

const EditPost = () => {
  
  const { posts, setPosts, format, api, navigate } = useContext(DataContext)

  const [editPostTitle, setEditPostTitle] = useState('')
  const [editPostBody, setEditPostBody] = useState('')
  const [editPostVideo, setEditPostVideo] = useState('')
  const [editPostVideoPreview, setEditPostVideoPreview] = useState('')


  const { id } = useParams() 
  const singlePost = posts.find(post => (post.id).toString() === id)
    


    useEffect(() => {
      if (singlePost) {
        setEditPostTitle(singlePost.title)
        setEditPostBody(singlePost.body)
        setEditPostVideo(singlePost.videoSrc)
        setEditPostVideoPreview(singlePost.videoPreview)
      }
        
      
    }, [])
    

    const handleEdit = async (id, title, body, imgSrc, videoPreview) => {
      const pullingData = {title, body, videoSrc: imgSrc, videoPreview, datetime: format(new Date(), 'EEEE dd,yyyy kk:mm:ss a'), edited: true}
      const newPost = [...posts, pullingData]

      try {
        const response = await api.put(`posts/${id}`, pullingData)
        setPosts(posts.map(post => post.id === id ? {...response.data} : post))
        navigate(`/post/${id}`)
        

      } catch (err) {
        console.log(err)
      }
    }

  return (
    <>
        
        <label htmlFor="">Edit your title</label>
        <input type="text" value={editPostTitle} onChange={(e) => setEditPostTitle(e.target.value)}/>

        <label htmlFor="">Edit your body</label>
        <input type="text" value={editPostBody} onChange={(e) => setEditPostBody(e.target.value)}/>

        <label htmlFor="">Edit your VideoSrc</label>
        <input type="text" value={editPostVideo} onChange={(e) => setEditPostVideo(e.target.value)}/>

        <label htmlFor="">Edit your VideoPreview</label>
        <input type="text" value={editPostVideoPreview} onChange={(e) => setEditPostVideoPreview(e.target.value)}/>


        <button onClick={() => handleEdit(singlePost.id, editPostTitle, editPostBody, editPostVideo, editPostVideoPreview)}>Save changes</button>

        <Link to={`/post/${id}`}>Go back to the post page</Link>
    </>
  )
}

export default EditPost