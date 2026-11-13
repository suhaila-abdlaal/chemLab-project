
import "./CategoryFilter.css";

function CategoryFilter(props) {
  return (
    <div className="category-filter">
      <button onClick={() => props.setLevel("All")}>
        All
      </button>

      <button onClick={() => props.setLevel("Beginner")}>
        Beginner
      </button>

      <button onClick={() => props.setLevel("Intermediate")}>
        Intermediate
      </button>
    </div>
  );
}

export default CategoryFilter;
