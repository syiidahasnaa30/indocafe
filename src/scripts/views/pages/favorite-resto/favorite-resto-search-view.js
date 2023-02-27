import "../../components/search-element";
import "../../components/restaurant-list";

class FavoriteRestoSearchView {
  getTemplate() {
    console.log("masuk");
    return `
        <h1 tabindex="0" class="favorite-pages">Your Favorite Restaurants</h1>
        <search-element></search-element>
        <div id="content-favorite-page" style="min-height:70vh"></div>
      `;
  }

  runWhenUserIsSearching(callback) {
    const queryElement = document.getElementById("keyword");
    const buttonElement = document.querySelector(".searchButton");
    buttonElement.addEventListener("click", (event) => {
      callback(queryElement.value);
      event.preventDefault();
    });
  }

  showRestaurant(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = this.getRestaurantElement(restaurants);
    } else {
      html = this.getNotFoundElement();
    }

    const content = document.querySelector("#content-favorite-page");
    if (content.hasChildNodes()) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(html);
    content.dispatchEvent(new Event("restaurants:updated"));
  }

  getRestaurantElement(restaurants) {
    const restaurantsElement = document.createElement("restaurant-list");
    restaurantsElement.restaurants = restaurants;
    return restaurantsElement;
  }

  getNotFoundElement() {
    const notFoundElement = document.createElement("not-found-element");
    notFoundElement.message = "Your Favorite Restaurants Not Found";
    return notFoundElement;
  }
}

export default FavoriteRestoSearchView;
