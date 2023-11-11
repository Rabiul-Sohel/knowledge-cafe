import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'


const Blogs = ({handleBookmark, handleRemoveBookmark, handleReadTime, handleRemoveReadTime}) => {
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  console.log(blogs);
  return (
    <div className="md:w-2/3">
      {
        blogs.map(blog => <Blog
          key={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleRemoveBookmark={handleRemoveBookmark}
          handleReadTime={handleReadTime}
          handleRemoveReadTime = {handleRemoveReadTime}
        ></Blog>)
      }
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: propTypes.func.isRequired,
  handleRemoveBookmark: propTypes.func,
  handleReadTime: propTypes.func,
  handleRemoveReadTime: propTypes.func
}

export default Blogs;