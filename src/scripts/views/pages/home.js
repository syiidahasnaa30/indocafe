import RestaurantData from "../../data/restaurant-data";
import "../components/hero-element";
import "../components/restaurant-list";

const Home = {
  async render() {
    return `
      <hero-elemen id="hero"></hero-elemen>
      <restaurant-list></restaurant-list>
    `;
  },
  async afterRender() {
    const listRestaurantElement = document.querySelector("restaurant-list");
    const restaurants = await RestaurantData.getRestaurants();
    listRestaurantElement.restaurants = restaurants;
    console.log(restaurants);
  },
};

export default Home;
