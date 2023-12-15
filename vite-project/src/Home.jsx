import React from 'react'
import Post from './Post'

import { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchInput, posts} = useContext(DataContext)

  

  return (
    <>
      <div className="cards__wrapper">
        {posts && (
          <>
            {posts
            .filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase()) || post.body.toLowerCase().includes(searchInput.toLowerCase()))
            .map((post) => (
              <Post post={post} key={post.id}/>
            )).reverse()}
          </>
        )}
      </div>

      {!posts.length && (
        <>
        <p>theres not posts!</p>
        </>
      )}
    </>
  )
}

export default Home