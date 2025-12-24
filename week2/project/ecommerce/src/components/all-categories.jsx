import { fetchApi } from "../utils/productsApi";
import { useState, useEffect } from "react";

const categoriesApi = `https://fakestoreapi.com/products/categories`;

const AllCategories = ({ displaySelectedCategory, activeCategory }) => {
  const [allCategories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setError(null);
      try {
        const categories = await fetchApi(categoriesApi);
        console.log("API results: ", categories);
        setCategories(categories);
      } catch (error) {
        setError(error);
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <div>Loading...!</div>;

  if (error) return <div>Something went wrong.</div>;

  if (!allCategories) return <div>No categories found.</div>;

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
