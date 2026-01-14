import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import FavBtn from "./FavBtn";

function ProductDetails() {
  const { id } = useParams();
  const productsApi = "https://fakestoreapi.com/products";

  const {
    data: product,
    isLoading,
    error,
  } = useFetch(id ? `${productsApi}/${id}` : null);

  if (isLoading) return <div>Loading...!</div>;
  if (error) return <div>Something went wrong.</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <>
      <h1>{product.title}</h1>

      <FavBtn productId={product.id} />

      <img src={product.image} id="product-details-image" alt={product.title} />
      <p>{product.description}</p>
      <p>€ {product.price}</p>
    </>
  );
}

export default ProductDetails;
