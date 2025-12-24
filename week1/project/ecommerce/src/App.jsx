import "./index.css";
import { useState } from "react";
import AllCategories from "./components/all-categories";
import AllProducts from "./components/all-products";
import allProducts from "./fake-data/all-products";

function App() {
  const [productsToShow, filterProductsToShow] = useState(allProducts);
  const [activeCategory, setActieCategory] = useState(null);

  const displaySelectedCategory = (selectedCategory) => {
    setActieCategory(selectedCategory);

    if (selectedCategory === null) {
      filterProductsToShow(allProducts);
      return;
    }

    const cleanSelectedCategory = selectedCategory.replace("FAKE: ", "");

    const filteredProducts = allProducts.filter((product) => {
      return product.category === cleanSelectedCategory;
    });

    filterProductsToShow(filteredProducts);
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
