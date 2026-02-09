import { useFetch } from "../hooks/useFetch";

const categoriesApi = `https://fakestoreapi.com/products/categories`;

const AllCategories = ({ displaySelectedCategory, activeCategory }) => {
  const { data: allCategories, isLoading, error } = useFetch(categoriesApi);

  if (isLoading) return <div>Loading...!</div>;

  if (error) return <div>Something went wrong.</div>;

  if (!allCategories || allCategories.length === 0)
    return <div>No categories found.</div>;

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
