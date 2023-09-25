import { useEffect, useState } from "react";
import { getPhoneIdFromStorage } from "../../Utilities/Localstorage";
import { useLoaderData } from "react-router-dom";
import FavoriteItem from "../../Components/FavoriteItem/FavoriteItem";

const Favorites = () => {
  const [favorites, setFavorite] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  const phones = useLoaderData();

  useEffect(() => {
    const storedPhoneData = getPhoneIdFromStorage();
    if (phones.length > 0) {
      let selectedPhones = [];
      for (const id of storedPhoneData) {
        const phone = phones.find((phone) => phone.id === id);
        if (phone) {
          selectedPhones.push(phone);
        }
      }
      setFavorite(selectedPhones);
    }
  }, [phones]);

  const handleRemoveAll = () => {
    localStorage.clear();
    setFavorite([]);
  };
  return (
    <div className="">
      <div className="text-center my-10 ">
        {favorites.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="btn bg-red-500 capitalize text-white"
          >
            Delete All Favorites
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-20">
        {isShowAll
          ? favorites.map((favorite) => (
              <FavoriteItem
                key={favorite.id}
                favorite={favorite}
              ></FavoriteItem>
            ))
          : favorites
              .slice(0, 2)
              .map((favorite) => (
                <FavoriteItem
                  key={favorite.id}
                  favorite={favorite}
                ></FavoriteItem>
              ))}
      </div>

      <div className="text-center">
        {favorites.length > 2 && (
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="btn bg-green-500 capitalize text-white mb-10"
          >
            {isShowAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Favorites;
