import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Blog = ({ blog, handleBookmark, handleRemoveBookmark, handleReadTime, handleRemoveReadTime  }) => {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  const [bookmarked, setBookmarked] = useState(false);
  const [isRead, setIsRead]=useState(false)

   const isBookmarked = (blog) => {
     setBookmarked(!bookmarked);
     if (!bookmarked) {
       handleBookmark(blog);
     } else {
       handleRemoveBookmark(blog.id)
     }
  };
  const handleIsRead = (reading_time) => {
    setIsRead(!isRead)
    if (!isRead) {
      handleReadTime(reading_time)
    } else {
      handleRemoveReadTime(reading_time)
    }
    
  }

  return (
    <div className="mb-20">
      <img
        className="rounded-sm"
        src={cover}
        alt={`cover picture of the blog of ${title}`}
      />
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-5 items-center">
          <img className="w-16 rounded-full" src={author_img} alt="" />
          <div>
            <h4 className="text-2xl font-bold text-[#111]"> {author} </h4>
            <p> {posted_date} </p>
          </div>
        </div>
        <div className="flex gap-3 items-center text-xl">
          <p> {reading_time} min read </p>
          <button className='text-2xl' style={{color: bookmarked && 'red'}} onClick={()=>isBookmarked(blog)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <h2 className="w-2/3 text-4xl text-black font-bold my-4"> {title} </h2>
      <div>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-2">
            {" "}
            <a href=""> {hash} </a>{" "}
          </span>
        ))}
      </div>
      <div className='text-lg font-semibold underline text-blue my-2'>
        <button
          style={{color: isRead && 'gray'}}
          onClick={() => handleIsRead(reading_time)} className='text-blue-400 underline'>Mark as read</button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleRemoveBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
  handleRemoveReadTime: PropTypes.func
}

export default Blog;