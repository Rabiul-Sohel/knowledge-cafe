
import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks}) => {
  console.log(bookmarks);
  return (
    <div className="mt-4 bg-gray-200 p-4 rounded-md">
      <h2 className="text-black text-2xl font-bold">Bookmarked Blogs: {bookmarks.length} </h2>
      {
        bookmarks.map((blog, idx) =>
          <h3 className="text-lg font-semibold text-black bg-white p-4 my-4 rounded-sm"
            key={idx}> {blog.title} </h3>)
      }
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks;