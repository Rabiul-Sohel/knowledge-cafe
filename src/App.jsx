
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import ReadingTime from './components/ReadingTime/ReadingTime';

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [read, setRead] = useState(0)

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleRemoveBookmark = (id) => {
    const newBookmarks = bookmarks.filter(blog => blog.id !== id)
    setBookmarks(newBookmarks)
    
  }
  const handleReadTime = (time) => {
    const newRead = read + time;
    setRead(newRead) 
  }
  const handleRemoveReadTime = (time) => {
    const newRead = read - time;
    setRead(newRead)
  }
 

  return (
    <div className="max-w-7xl md:mx-auto mx-4">
      <Header></Header>
      <div className="md:flex gap-10 mt-10">
        <Blogs
          handleBookmark={handleBookmark}
          handleRemoveBookmark={handleRemoveBookmark}
          handleReadTime={handleReadTime}
          handleRemoveReadTime= {handleRemoveReadTime}
        ></Blogs>
        <div className="md:w-1/3">
          <ReadingTime read={read}></ReadingTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App
