
import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleToBookmark = blog => {
    
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time =>{
    
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>

     
      <Header></Header>
      
      

      <div className=' lg:flex max-w-6xl mx-auto'>
      <Blogs handleToBookmark={handleToBookmark} handleReadingTime={handleReadingTime} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      
      </div>
    </>
  )
}

export default App
