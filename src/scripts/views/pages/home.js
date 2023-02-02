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
    const inputKeyword = document.querySelector("#keyword");
    const buttonSearch = document.querySelector(".searchButton");
    const keyword = inputKeyword.value;

    let restaurants = await RestaurantData.getRestaurants();
    listRestaurantElement.restaurants = restaurants;
    // document.addEventListener("DOMContentLoaded", async () => {
    //   let restaurants = await RestaurantData.getRestaurants();
    //   listRestaurantElement.restaurants = restaurants;
    // });
    // if (keyword == "" || keyword == null) {
    //   listRestaurantElement.restaurants = restaurants;
    // }
    // await buttonSearch.addEventListener("click", async (e) => {
    //   if (keyword.length > 0) {
    //     listRestaurantElement.restaurants = await RestaurantData.search(
    //       keyword
    //     );
    //   } else {
    //     listRestaurantElement.restaurants = restaurants;
    //   }
    //   console.log("MASUK");
    //   e.preventDefault();
    // });
    // });
  },
};

export default Home;
