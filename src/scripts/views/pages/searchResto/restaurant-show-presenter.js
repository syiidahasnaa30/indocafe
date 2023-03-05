class RestaurantShowPresenter {
  constructor({ view, restaurantList }) {
    this._view = view;
    this._restaurantList = restaurantList;

    this._showRestaurants();
  }

  async _showRestaurants() {
    const resto = await this._restaurantList.getRestaurants();
    this._displayResto(resto);
  }
  _displayResto(resto) {
    this._view.showRestaurant(resto);
  }
}
export default RestaurantShowPresenter;
