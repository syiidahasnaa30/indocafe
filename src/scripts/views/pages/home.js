import RestaurantData from "../../data/restaurant-data";
import "../components/hero-element";
import "../components/restaurant-list";

const Home = {
  async render() {
    return `
      <hero-element id="hero" class="hero-element"></hero-element>
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
