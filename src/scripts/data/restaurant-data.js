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

  static async addReview(review) {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded | application/json",
        },
        body: JSON.stringify(review),
      };

      const response = await fetch(API_ENDPOINT.addReview, options);
      const responseJson = await response.json();
      console.log(responseJSON);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  }
}

export default RestaurantData;
