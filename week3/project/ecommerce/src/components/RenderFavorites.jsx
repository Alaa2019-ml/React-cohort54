import { useMemo } from "react";
import { useFavourites } from "../context/FavouritesContext";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "./ProductCard";

const RenderFavorites = () => {
  const { favourites } = useFavourites();
  const productsApi = "https://fakestoreapi.com/products";

  const urls = useMemo(
    () => favourites.map((id) => `${productsApi}/${id}`),
    [favourites]
  );

  const { data, isLoading, error } = useFetch(urls);

  if (isLoading) return <div>Loading...!</div>;
  if (error) return <div>Something went wrong.</div>;

  if (!favourites || favourites.length === 0)
    return <h2>You haven't chosen any favourites yet!</h2>;
  if (!data || data.length === 0)
    return <h2>You haven't chosen any favourites yet!</h2>;

  return (
    <div className="products-grid">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RenderFavorites;
