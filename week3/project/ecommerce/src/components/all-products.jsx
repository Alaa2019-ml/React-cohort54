import ProductCard from "./ProductCard";

const AllProducts = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
