import "../../components/search-element";
import "../../components/restaurant-list";

class FavoriteRestoSearchView {
  getTemplate() {
    return `
        <search-element></search-element>
        <div id="content-favorite-page" style="min-height:70vh">
        <restaurant-list></restaurant-list>
        </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    const queryElement = document.getElementById("keyword");
    queryElement.addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurants) {
    if (restaurants.length > 0) {
      document.querySelector(
        "restaurant-list"
      ).innerHTML = this.getRestaurantElement(restaurants);
    } else {
      document
        .querySelector("#content-favorite-page")
        .appendChild(this.getNotFoundElement());
    }

    document
      .getElementById("content-favorite-page")
      .dispatchEvent(new Event("restaurants:updated"));
  }

  getRestaurantElement(restaurants) {
    const element = restaurants.reduce(
      (carry, restaurant) =>
        carry.concat(`<li class="restaurant-item">
          <h1 class="title-content"><a href="">${
            restaurant.name || "-"
          }</a></h1>
          </li>`),
      ""
    );
    return element;
  }

  getNotFoundElement() {
    const notFoundElement = document.createElement("not-found-element");
    notFoundElement.message = "Restaurant Not Found";
    return notFoundElement;
  }
}

export default FavoriteRestoSearchView;
