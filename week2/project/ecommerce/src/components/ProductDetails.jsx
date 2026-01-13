import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/productsApi";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const productsApi = "https://fakestoreapi.com/products";

  useEffect(() => {
    if (!id) return;

    (async () => {
      setError(null);

      try {
        const data = await fetchApi(`${productsApi}/${id}`);
        setProduct(data);
      } catch (error) {
        setError(error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id, productsApi]);

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  if (error) return <div>Something went wrong.</div>;

  if (!product) return <div>Product not found. </div>;

  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.image} id="product-details-image" alt={product.title} />
      <p>{product.description}</p>
      <p>€ {product.price}</p>
    </>
  );
}

export default ProductDetails;
