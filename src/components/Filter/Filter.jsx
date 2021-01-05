import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={filter} name={filter} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
