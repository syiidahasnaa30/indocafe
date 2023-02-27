import FavoriteRestoSearchPresenter from "./favorite-resto/favorite-resto-search-presenter";
import FavoriteRestoShowPresenter from "./favorite-resto/favorite-resto-show-presenter";
import FavoriteResto from "../../data/favorite-resto";
import FavoriteRestoSearchView from "./favorite-resto/favorite-resto-search-view";

const view = new FavoriteRestoSearchView();
const Favorites = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({
      view,
      favoriteRestaurants: FavoriteResto,
    });
    new FavoriteRestoSearchPresenter({
      view,
      favoriteResto: FavoriteResto,
    });
  },
};
export default Favorites;
