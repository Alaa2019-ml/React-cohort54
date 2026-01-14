import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";
import { useFavourites } from "../context/FavouritesContext";

const FavBtn = ({ productId }) => {
  const { toggleFavourite, isFavourited } = useFavourites();
  const fav = isFavourited(productId);

  return (
    <button className="heart-button" onClick={() => toggleFavourite(productId)}>
      <img src={fav ? solidHeart : regularHeart} alt="Add to favourites" />
    </button>
  );
};

export default FavBtn;
