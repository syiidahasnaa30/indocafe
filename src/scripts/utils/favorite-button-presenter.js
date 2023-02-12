import "../views/components/like-button";
import "../views/components/unlike-button";

const FavoriteButtonInitiator = {
  async init({ favoriteButtoncContainer, favoriteResto, restaurant }) {
    this._favoriteButtonContainer = favoriteButtoncContainer;
    this._restaurant = restaurant;
    this._favoriteResto = favoriteResto;

    await this.render();
  },

  async render() {
    const { id } = this._restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderMoveFromFavorite();
    } else {
      this.renderAddToFavorite();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await this._favoriteResto.getResto(id);
    return !!restaurant;
  },

  renderAddToFavorite() {
    this._favoriteButtonContainer.innerHTML = "<like-button></like-button>";

    const favoriteButton = document.querySelector("#add-favorite-button");
    favoriteButton.addEventListener("click", async () => {
      await this._favoriteResto.putResto(this._restaurant);
      this.render();
    });
  },

  renderMoveFromFavorite() {
    this._favoriteButtonContainer.innerHTML = "<unlike-button></unlike-button>";

    const favoriteButton = document.querySelector("#btn-remove-favorite");
    favoriteButton.addEventListener("click", async () => {
      await this._favoriteResto.deleteResto(this._restaurant.id);
      this.render();
    });
  },
};

export default FavoriteButtonInitiator;
