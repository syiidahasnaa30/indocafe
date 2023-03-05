import "../../components/hero-element";
import "../../components/restaurant-list";

class RestaurantSearchView {
  getTemplate() {
    console.log("masuk");
    return `
    <hero-element></hero-element>
    <div id="homeContent"></div>
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

    const content = document.querySelector("#homeContent");
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
    notFoundElement.message = "Your Restaurants Not Found";
    return notFoundElement;
  }
}

export default RestaurantSearchView;
