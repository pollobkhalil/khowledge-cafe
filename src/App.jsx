
import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
 
  const [bookmarks, setBookmarks] = useState([])

  const handleToBookmark = blog => {
    console.log(blog)
  }

  return (
    <>

     
      <Header></Header>
      
      

      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleToBookmark={handleToBookmark} ></Blogs>
      <Bookmark></Bookmark>
      
      </div>
    </>
  )
}

export default App
