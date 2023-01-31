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
}

export default RestaurantData;
