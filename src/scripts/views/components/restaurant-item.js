import CONFIG from "../../globals/config";

class RestaurantItem extends HTMLElement {
  set restaurant(restaurantItem) {
    this._restaurant = restaurantItem;
    this.render();
  }
  render() {
    this.innerHTML = `
    
            <img
                tabindex="0"
                class="image-content"
                src=${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId || ""}
                alt="Image of ${this._restaurant.name || "-"} restaurant"
            />
            <div class="content">
                <h1 tabindex="0" class="title-content"><a  href="/#/detail/${
                  this._restaurant.id
                }">${this._restaurant.name || "-"}</a></h1>
                <div class="rating-map">
                <p tabindex="0" class="subtitle-content">
                <i class="fa-solid fa-location-dot"></i> Kota ${
                  this._restaurant.city || "-"
                }
                </p>
                <p tabindex="0" class="subtitle-content">
                 
                <i class="fa-sharp fa-solid fa-star"></i>
                ${this._restaurant.rating || "-"}
                </p>
                </div>
                
                <p tabindex="0" class="description-content">
                ${this._restaurant.description.substr(0, 100) || "-"}...</p>
                
            </div>
        
      `;
  }
}
customElements.define("restaurant-item", RestaurantItem);
