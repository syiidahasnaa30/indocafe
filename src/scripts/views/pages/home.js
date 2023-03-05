import RestaurantSearchView from "./searchResto/restaurant-search-view";
import RestaurantSearchPresenter from "./searchResto/restaurant-search-presenter";
import RestaurantData from "../../data/restaurant-data";
import RestaurantShowPresenter from "./searchResto/restaurant-show-presenter";

const view = new RestaurantSearchView();
const Home = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    const restaurantList = RestaurantData;
    new RestaurantSearchPresenter({ restaurantList, view });
    new RestaurantShowPresenter({ view, restaurantList });
  },
};

export default Home;
