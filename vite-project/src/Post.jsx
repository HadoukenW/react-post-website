import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post}) => {

    const {title, datetime, body, id, edited, videoPreview} = post
  return (
    <Link to={`/post/${id}`} className="post__link">
        <div className="post__wrapper">
            {edited && <p>Edited</p>}
            <img style={{width: '100%', height: 'auto'}} src={videoPreview}/>
            <div>{title}</div>
            <time dateTime={datetime}>{datetime}</time>
            <p>{body.length >= 25 ? `${body.slice(0, 25)}...` : body} </p>
        </div>
    </Link>
  )
}

export default Post