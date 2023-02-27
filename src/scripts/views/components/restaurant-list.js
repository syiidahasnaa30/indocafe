import "./restaurant-item";
class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this._restaurants.forEach((restaurant) => {
      const restaurantElemen = document.createElement("restaurant-item");
      restaurantElemen.restaurant = restaurant;
      restaurantElemen.tabIndex = "0";
      restaurantElemen.className = "restaurant-item";
      restaurantElemen.classList = "restaurant-item";
      this.appendChild(restaurantElemen);
    });
  }
}
customElements.define("restaurant-list", RestaurantList);
