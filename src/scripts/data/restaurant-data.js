import "regenerator-runtime";
import API_ENDPOINT from "../globals/api-endpoints";

class RestaurantData {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async search(query) {
    const response = await fetch(API_ENDPOINT.search(query));
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }
}

export default RestaurantData;
