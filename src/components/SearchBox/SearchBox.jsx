const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <form action="">
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onChangeFilter}
        />
      </form>
    </div>
  );
};

export default SearchBox;
