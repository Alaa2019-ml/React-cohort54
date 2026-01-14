import { Link } from "react-router-dom";
import FavBtn from "./FavBtn";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />

      <Link className="product-title" to={`/products/${product.id}`}>
        {product.title}
      </Link>

      <p>€ {product.price}</p>

      <FavBtn productId={product.id} />
    </div>
  );
};

export default ProductCard;
