import "./index.css";
import { useState, useEffect, useCallback } from "react";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import { fetchApi } from "./utils/productsApi";
import { Routes, Route } from "react-router-dom";

function App() {
  const [productsToShow, setProductsToShow] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsApi = `https://fakestoreapi.com/products`;

  const loadData = useCallback(async (url) => {
    setError(null);
    try {
      const data = await fetchApi(url);
      console.log("API results: ", data);
      setProductsToShow(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(productsApi);
  }, [loadData]);

  const displaySelectedCategory = async (selectedCategory) => {
    setActiveCategory(selectedCategory);

    const productsUrl = selectedCategory
      ? `${productsApi}/category/${encodeURIComponent(selectedCategory)}`
      : productsApi;

    loadData(productsUrl);
  };

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  if (error) return <div>Something went wrong.</div>;

  if (!productsToShow) {
    return <div>No data found!</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              displaySelectedCategory={displaySelectedCategory}
              activeCategory={activeCategory}
              productsToShow={productsToShow}
            />
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
