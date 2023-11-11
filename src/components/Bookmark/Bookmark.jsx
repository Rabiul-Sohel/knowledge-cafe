import PropTypes from 'prop-types'
const Bookmark = ({ bookmark }) => {
  return (
    <div>
      <h3 className="text-xl text-black font-semibold my-7 p-5 bg-white rounded-md"
      > {bookmark.title} </h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.array.isRequired
}

export default Bookmark;