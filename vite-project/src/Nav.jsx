import React from 'react'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Nav = () => {
  const {searchInput, setSearchInput} = useContext(DataContext)
  return (
    <div className="search__wrapper">
      <label htmlFor="search">search for posts...</label>
      <input id="search" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
    </div>
  )
}

export default Nav