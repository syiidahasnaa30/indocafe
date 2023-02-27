class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteMovies();
  }

  async _showFavoriteMovies() {
    const resto = await this._favoriteRestaurants.getAllRestaurant();
    this._displayResto(resto);
  }
  _displayResto(resto) {
    this._view.showRestaurant(resto);
  }
}
export default FavoriteRestoShowPresenter;
