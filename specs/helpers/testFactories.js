import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-button-presenter";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtoncContainer: document.querySelector(
      "#favorite-button-container"
    ),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
