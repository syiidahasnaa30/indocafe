class RestaurantSearchPresenter {
  constructor({ restaurantList, view }) {
    this._restaurantList = restaurantList;
    this._view = view;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchResto(latestQuery);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundResto;
    if (this._latestQuery.length > 0) {
      foundResto = await this._restaurantList.search(this._latestQuery);
    } else {
      foundResto = await this._restaurantList.getRestaurants();
    }

    this._showFoundRestaurant(foundResto);
  }
  _showFoundRestaurant(restaurants) {
    this._view.showRestaurant(restaurants);
  }
  get latestQuery() {
    return this._latestQuery;
  }
}
export default RestaurantSearchPresenter;
