import HomePageInitiator from "../../utils/home-page-initiator";
import "../components/restaurant-list";
import "../components/hero-element";
import RestaurantSearchView from "./searchResto/restaurant-search-view";
import RestaurantSearchPresenter from "./searchResto/restaurant-search-presenter";
import RestaurantData from "../../data/restaurant-data";
import RestaurantShowPresenter from "./searchResto/restaurant-show-presenter";

const view = new RestaurantSearchView();
const Home = {
  async render() {
    // return `
    //   <hero-element></hero-element>
    //   <div id="homeContent">
    //     <restaurant-list></restaurant-list>
    //   </div>
    // `;
    return view.getTemplate();
  },
  async afterRender() {
    // HomePageInitiator.init(document.querySelector("restaurant-list"));
    const restaurantList = RestaurantData;
    new RestaurantSearchPresenter({ restaurantList, view });
    new RestaurantShowPresenter({ view, restaurantList });
  },
};

export default Home;
