// src/components/SearchBar.jsx

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder= " Search for a country..."
    onChange={e => onSearch(e.target.value)}
    className="p-3 w-full md:w-80 shadow-md rounded  "
  />
);

export default SearchBar;
