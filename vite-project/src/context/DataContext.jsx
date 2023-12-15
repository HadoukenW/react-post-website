import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import api from '../api/posts'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
  const [edited, setEdited] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts')
        setPosts(response.data)
      }
      catch(err) {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
            console.log(`Error ${err.message}`)
        }
      }
    }
    fetchPosts()    
  }, [])

    return (
        <DataContext.Provider value={{
            posts, setPosts,
            searchInput, setSearchInput,
            navigate, format, api
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext