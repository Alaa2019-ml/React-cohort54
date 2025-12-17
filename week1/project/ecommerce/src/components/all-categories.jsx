import allCategories from "../fake-data/all-categories";

const AllCategories = ({ displaySelectedCategory, activeCategory }) => {
  return (
    <div className="categories-container">
      {allCategories.map((category) => (
        <button
          className={`btn ${activeCategory === category ? "active" : ""}`}
          key={category}
          onClick={() => displaySelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default AllCategories;
