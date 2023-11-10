

const Blog = ({ blog }) => {
  const {title, cover} = blog
  return (
    <div>
      <img src={cover} alt="" />
      <h2>Title:</h2>
    </div>
  );
};

export default Blog;