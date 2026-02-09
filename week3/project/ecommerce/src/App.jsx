import "./index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import RenderFavorites from "./components/RenderFavorites";
import Navbar from "./context/Navbar";
import { useFetch } from "./hooks/useFetch";

function App() {
  const productsApi = "https://fakestoreapi.com/products";

  const [activeCategory, setActiveCategory] = useState(null);
  const [productsUrl, setProductsUrl] = useState(productsApi);

  const { data: productsToShow, isLoading, error } = useFetch(productsUrl);

  const displaySelectedCategory = (selectedCategory) => {
    setActiveCategory(selectedCategory);

    const url = selectedCategory
      ? `${productsApi}/category/${encodeURIComponent(selectedCategory)}`
      : productsApi;

    setProductsUrl(url);
  };

  if (isLoading) return <div>Loading...!</div>;
  if (error) return <div>Something went wrong.</div>;
  if (!productsToShow) return <div>No data found!</div>;

  return (
    <>
      <Navbar />

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

        <Route path="/favourites" element={<RenderFavorites />} />

        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
