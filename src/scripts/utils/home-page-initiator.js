import RestaurantData from "../data/restaurant-data";
import "../views/components/not-found-element";

const HomePageInitiator = {
  async init(contentHomeContainer) {
    this._contentHomeContainer = contentHomeContainer;
    this.render();
  },

  async render() {
    try {
      await this.renderRestaurants();
    } catch (error) {
      this.renderNotFound(
        `Something error with your internet connection ${error.message}`
      );
    }
  },

  async renderRestaurants() {
    const restaurants = await RestaurantData.getRestaurants();
    this._contentHomeContainer.restaurants = restaurants;
  },

  renderNotFound(message) {
    const notFoundElement = document.createElement("not-found-element");
    notFoundElement.message = message;
    this._contentHomeContainer.appendChild(notFoundElement);
  },
};

export default HomePageInitiator;
