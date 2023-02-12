import UrlParser from "../../routes/url-parser";
import RestaurantData from "../../data/restaurant-data";
import "../components/not-found-element";
import createDetailRestaurant from "../template/create-detail-restaurant";

const Detail = {
  async render() {
    return `
    <div class="detailPageContainer"></div>
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoDescriptionContent = document.querySelector(
      ".detailPageContainer"
    );

    try {
      const restaurant = await RestaurantData.detailResto(url.id);
      await createDetailRestaurant.init(restoDescriptionContent, restaurant);
    } catch (error) {
      const notFoundElement = document.createElement("not-found-element");
      notFoundElement.message = `Your internet connection is interupted, 
      we can show the detail restaurants`;
      restoDescriptionContent.appendChild(notFoundElement);
    }
  },
};

export default Detail;
