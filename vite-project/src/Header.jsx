import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="nav__wrapper">
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/newPost" className="btn">
        Post new post
      </Link>
      <Link to="/about" className="btn">
        About
      </Link>
      
    </header>
  )
}

export default Header