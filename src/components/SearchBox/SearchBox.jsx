const SearchBox = ({ filter, changeFilter }) => {
  return (
    <div>
      <form action="">
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={changeFilter}
        />
      </form>
    </div>
  );
};

export default SearchBox;
