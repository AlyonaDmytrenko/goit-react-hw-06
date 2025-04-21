import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
