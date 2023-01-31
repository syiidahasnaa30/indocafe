import CONFIG from "../../globals/config";
import UrlParser from "../../routes/url-parser";
import RestaurantData from "../../data/restaurant-data";
import "../components/resto-description";
import "../components/resto-menu-list";
import "../components/reviews";

const Detail = {
  async render() {
    return `
    <div class="resto-header">
        <img
        class="img-detail-page"
        tabindex="0" 
        src=""
        />
        <resto-description></resto-description>
    </div>
    <div class="menu-section">
        <h2 tabindex="0" >Food</h2>
        <resto-menu-list id="food"></resto-menu-list>
        <h2 tabindex="0">Beverage</h2>
        <resto-menu-list id="drinks"></resto-menu-list>
    </div>
    <div class="review-section">
      <h2 tabindex="0">Reviews</h2>
      <reviews-element></reviews-element>
      <button class="create-review">
        Create a review <i class="fa-solid fa-pen"></i>
      </button>
    </div>
    
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoDescription = document.querySelector("resto-description");
    const foods = document.querySelector("#food");
    const drinks = document.querySelector("#drinks");
    const reviews = document.querySelector("reviews-element");
    const img = document.querySelector(".img-detail-page");

    const restaurant = await RestaurantData.detailResto(url.id);

    img.src = CONFIG.BASE_IMAGE_URL + restaurant.pictureId;
    img.alt = "Image of " + restaurant.name + " Restaurant";
    restoDescription.resto = restaurant;
    foods.restoMenuList = restaurant.menus.foods;
    drinks.restoMenuList = restaurant.menus.drinks;
    reviews.reviews = restaurant.customerReviews;
  },
};

export default Detail;
