import PropTypes from 'prop-types'
const Blog = ({ blog }) => {
  const {title, cover, author_img, author, posted_date,reading_time} = blog
  return (
    <div className="mb-12">
      <img className="rounded-sm" src={cover} alt="" />
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-5 items-center">
          <img className="w-16 rounded-full" src={author_img} alt="" />
          <div>
            <h4> {author} </h4>
            <p> {posted_date} </p>
          </div>
          
        </div>
        <div>
          <p> {reading_time} mins read </p>

        </div>
      </div>
      <h2 className="w-2/3 text-4xl text-black font-bold"> {title} </h2>

    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;