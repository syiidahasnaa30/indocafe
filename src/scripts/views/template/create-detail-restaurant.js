import CONFIG from "../../globals/config";
import "../components/resto-menu-list";
import "../components/reviews";
import FavoriteButtonInitiator from "../../utils/favorite-button-presenter";
import FavoriteResto from "../../data/favorite-resto";
const createDetailRestaurant = {
  async init(detailContainer, restaurant) {
    this._detailContainer = detailContainer;
    this._restaurant = restaurant;
    this.render();
    this.afterRender();
  },

  async render() {
    this._detailContainer.innerHTML = `
    <div class="resto-header">
        <img
        class="img-detail-page"
        tabindex="0" 
        src=${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}
        alt ="image of ${this._restaurant.name}"
        />
        <div class="resto-info">
            <h1 id="detail-title" tabindex="0">${this._restaurant.name}</h1>
            <div id="favorite-button-container"></div>
            <div class="section-rating-map">
                <div class="section-rating" tabindex="0">
                    <p tabindex="0"><i class="fa-sharp fa-solid fa-star"></i> ${
                      this._restaurant.rating
                    }</p>
                    <p tabindex="0">Ratings</p>
                </div>
                <div class="section-map" tabindex="0">
                    <p tabindex="0">
                    <i class="fa-solid fa-location-dot"></i> ${
                      this._restaurant.address +
                      ", Kota " +
                      this._restaurant.city
                    }</p>
                </div>
            </div>
            <p class="description" tabindex="0">
            <span style="font-weight:500">Description :</span>
            <br>${this._restaurant.description}</p>
            <div class="tagsElement">
                ${this._restaurant.categories
                  .map((categori) => {
                    return `<span class="tag" tabindex="0">
                    ${categori.name}
                    </span>`;
                  })
                  .join("")}
            </div>
        </div>
    </div>
    <div class="menu-section">
        <h2 tabindex="0" >Food</h2>
        <resto-menu-list id="food"></resto-menu-list>
        <h2 tabindex="0">Beverage</h2>
        <resto-menu-list id="drinks"></resto-menu-list>
    </div>
    <div class="review-section">
    <h2 tabindex="0">Customer Review's</h2>
    <reviews-element></reviews-element>
   
    </div>
    `;
  },

  async afterRender() {
    const foods = document.querySelector("#food");
    const drinks = document.querySelector("#drinks");
    const reviews = document.querySelector("reviews-element");
    const favoriteButon = "#favorite-button-container";

    FavoriteButtonInitiator.init({
      favoriteButtoncContainer: document.querySelector(favoriteButon),
      favoriteResto: FavoriteResto,
      restaurant: {
        id: this._restaurant.id,
        name: this._restaurant.name,
        pictureId: this._restaurant.pictureId,
        rating: this._restaurant.rating,
        city: this._restaurant.city,
        description: this._restaurant.description,
      },
    });

    foods.restoMenuList = this._restaurant.menus.foods;
    drinks.restoMenuList = this._restaurant.menus.drinks;
    reviews.reviews = this._restaurant.customerReviews;
  },
};
export default createDetailRestaurant;
