import { Link } from "react-router-dom";

const AllProducts = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />

          <Link className="product-title" to={`/products/${product.id}`}>
            {product.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
