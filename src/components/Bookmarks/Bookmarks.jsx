
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
  console.log(bookmarks);
  return (
    <div className="mt-4 bg-gray-200 p-4 rounded-md">
      <h2 className="text-black text-3xl font-bold">Bookmarked Blogs: {bookmarks.length} </h2>
      {
        bookmarks.map((bookmark, idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>
          )
      }
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks;