import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-button-presenter";
import FavoriteResto from "../../src/scripts/data/favorite-resto";
const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtoncContainer: document.querySelector(
      "#favorite-button-container"
    ),
    favoriteResto: FavoriteResto,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
