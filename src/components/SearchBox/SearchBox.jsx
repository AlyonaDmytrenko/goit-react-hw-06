import { useSelector } from 'react-redux';

const SearchBox = () => {
  const filter = useSelector(state => {
    return state.filters.name;
  });

  return (
    <div>
      <form action="" value={filter}>
        <p>Find contacts by name</p>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  );
};

export default SearchBox;
