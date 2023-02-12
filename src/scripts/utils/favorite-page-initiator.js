import "../views/components/restaurant-list";
import "../views/components/not-found-element";
import FavoriteResto from "../data/favorite-resto";

const FavoritePageInitiator = {
  async init(contentContainer) {
    this._contentContainer = contentContainer;
    this.render();
  },

  async render() {
    try {
      const favoriteRestaurants = await FavoriteResto.getAllRestaurant();
      if (favoriteRestaurants.length < 1) {
        this.renderNotFound(
          `We can't show your favorite movie, 
          please add your favorite movie first!`
        );
      } else {
        this.renderRestaurants(favoriteRestaurants);
      }
    } catch (error) {
      this.renderNotFound(
        "Something error with the local database " + error.message
      );
    }
  },

  renderRestaurants(restaurants) {
    const restaurantsElement = document.createElement("restaurant-list");
    restaurantsElement.restaurants = restaurants;
    this._contentContainer.appendChild(restaurantsElement);
  },

  renderNotFound(message) {
    const notFoundElement = document.createElement("not-found-element");
    notFoundElement.message = message;
    this._contentContainer.appendChild(notFoundElement);
  },
};

export default FavoritePageInitiator;
