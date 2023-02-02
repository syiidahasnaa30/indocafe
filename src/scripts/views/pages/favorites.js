import "../components/restaurant-list";
import FavoriteResto from "../../data/favorite-resto";

const Favorites = {
  async render() {
    return `
          <h2 style="margin:20px">Your Favorite Movie</h2>
          <restaurant-list style="min-height:65vh"></restaurant-list>
        `;
  },

  async afterRender() {
    const listRestaurantElement = document.querySelector("restaurant-list");
    const restaurants = await FavoriteResto.getAllRestaurant();
    listRestaurantElement.restaurants = restaurants;
  },
};
export default Favorites;
