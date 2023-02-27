import "../../components/not-found-element";
class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto, view }) {
    this._favoriteResto = favoriteResto;
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
      foundResto = await this._favoriteResto.searchResto(this._latestQuery);
    } else {
      foundResto = await this._favoriteResto.getAllRestaurant();
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
export default FavoriteRestoSearchPresenter;
