
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search experiments..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
