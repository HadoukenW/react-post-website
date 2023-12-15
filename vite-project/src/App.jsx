import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Missing from './Missing'
import NewPost from './NewPost'
import About from './About'
import SinglePost from './SinglePost'
import EditPost from './EditPost'

import {Routes, Route} from 'react-router-dom'

import { DataProvider } from './context/DataContext'

function App() {
  
  return (
    <>
      <Header />
      <DataProvider>
        <Nav/>
  
        <main className="main__content container">
          <Routes>
            <Route path="/" element={<Home />}/>
  
            <Route path="/post/:id" element={<SinglePost />}/>
            <Route path="/edit/:id" element={<EditPost />}/>
  
  
            <Route path="/newPost" element={<NewPost />}/>
            <Route path="/about" element={<About />}/>
            <Route path='*' element={<Missing />}/>
          </Routes>
        </main>
      </DataProvider>

      <Footer />
    </>
  )
}

export default App
