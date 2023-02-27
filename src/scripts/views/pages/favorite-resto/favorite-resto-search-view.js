import "../../components/search-element";
import "../../components/restaurant-list";

class FavoriteRestoSearchView {
  getTemplate() {
    return `
        <h1 tabindex="0" class="favorite-pages">Your Favorite Restaurants</h1>
        <search-element></search-element>
        <div id="content-favorite-page" style="min-height:70vh"></div>
      `;
  }

  runWhenUserIsSearching(callback) {
    const queryElement = document.getElementById("keyword");
    queryElement.addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = this.getRestaurantElement(restaurants);
    } else {
      html = this.getNotFoundElement();
    }
    document.querySelector("#content-favorite-page").appendChild(html);
    document
      .getElementById("content-favorite-page")
      .dispatchEvent(new Event("restaurants:updated"));
  }

  getRestaurantElement(restaurants) {
    const restaurantsElement = document.createElement("restaurant-list");
    restaurantsElement.restaurants = restaurants;
    return restaurantsElement;
  }

  getNotFoundElement() {
    const notFoundElement = document.createElement("not-found-element");
    notFoundElement.message = "Restaurant Not Found";
    return notFoundElement;
  }
}

export default FavoriteRestoSearchView;
