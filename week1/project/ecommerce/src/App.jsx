import "./index.css";
import { useState } from "react";
import AllCategories from "./components/all-categories";
import AllProducts from "./components/all-products";
import allProducts from "./fake-data/all-products";

function App() {
  const [productsToShow, filterProductsToShow] = useState(allProducts);
  const [activeCategory, setActieCategory] = useState(null);

  const displaySelectedCategory = (category) => {
    setActieCategory(category);

    if (category === "FAKE: electronics") {
      const electronics = allProducts.filter(
        (product) => product.category === "electronics"
      );
      filterProductsToShow(electronics);
    } else if (category === "FAKE: jewelery") {
      const jewelery = allProducts.filter(
        (product) => product.category === "jewelery"
      );
      filterProductsToShow(jewelery);
    } else if (category === "FAKE: men's clothing") {
      const menClothing = allProducts.filter(
        (product) => product.category === "men's clothing"
      );
      filterProductsToShow(menClothing);
    } else if (category === "FAKE: women's clothing") {
      const womenClothing = allProducts.filter(
        (product) => product.category === "women's clothing"
      );
      filterProductsToShow(womenClothing);
    } else {
      filterProductsToShow(allProducts);
    }
  };

  return (
    <>
      <h1>Products:</h1>
      <AllCategories
        displaySelectedCategory={displaySelectedCategory}
        activeCategory={activeCategory}
      />
      <AllProducts products={productsToShow} />
    </>
  );
}

export default App;
