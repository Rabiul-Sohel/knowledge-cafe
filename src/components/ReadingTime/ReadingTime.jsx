
import PropTypes from 'prop-types'
const ReadingTime = ({read}) => {
  return (
    <div
      className="w-full text-2xl px-8 py-4 text-[#6047EC] bg-gray-200 text-center rounded-md font-bold"
    >
      <h3>Spent time on read: {read} min </h3>
    </div>
  );
};
ReadingTime.propTypes = {
  read: PropTypes.number.isRequired
}

export default ReadingTime;