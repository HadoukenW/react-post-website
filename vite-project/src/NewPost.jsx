import React, { useState } from 'react'

import { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {

  const {format, posts, setPosts, navigate, api} = useContext(DataContext)

  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [postVideoSrc, setPostVideoSrc] = useState('')
  const [postVideoPreview, setPostVideoPreview] = useState('')

  const handleAdd = async (title, body, videoSrc, videoPreview, setTitle, setBody, setVideoSrc, setVideoPreview) => {
    
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const pullingData = {id, title, body, videoSrc, videoPreview, datetime: format(new Date(), 'EEEE dd,yyyy kk:mm:ss a'), edited: false}
    const newPost = [...posts, pullingData]
    
    try {
      await api.post(`/posts`, pullingData)
      setPosts(newPost)
      setTitle('')
      setBody('')
      setVideoSrc('')
      setVideoPreview('')
      setPostVideoPreview('')
      navigate('/')
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className="form__newPost">
        <div className="input__newPost">
          <label htmlFor="">post title</label>
          <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
        </div>
  
        <div className="input__newPost">
          <label htmlFor="">post body</label>
          <input type="text" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
        </div>
  
        <div className="input__newPost">
          <label htmlFor="">post video</label>
          <input type="text" value={postVideoSrc} onChange={(e) => setPostVideoSrc(e.target.value)}/>
        </div>
  
        <div className="input__newPost">
          <label htmlFor="">post video Preview</label>
          <input type="text" value={postVideoPreview} onChange={(e) => setPostVideoPreview(e.target.value)}/>
        </div>
      </form>

      <button onClick={(e) => handleAdd(postTitle, postBody, postVideoSrc, postVideoPreview, setPostTitle, setPostBody, setPostVideoSrc, setPostVideoPreview)}>Add new post</button>
    </>
  )
}

export default NewPost