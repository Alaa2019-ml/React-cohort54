import AllCategories from "./all-categories";
import AllProducts from "./all-products";

const HomePage = ({
  activeCategory,
  displaySelectedCategory,
  productsToShow,
}) => {
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
};

export default HomePage;
