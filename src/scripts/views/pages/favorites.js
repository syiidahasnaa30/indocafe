import FavoritePageInitiator from "../../utils/favorite-page-initiator";

const Favorites = {
  async render() {
    return `         
          <h1 tabindex="0" class="favorite-pages">
          Your Favorite Restaurants
          </h1>          
          <div id="content-favorite-page" style="min-height:70vh"></div>
        `;
  },

  async afterRender() {
    const contentFavoritePage = document.querySelector(
      "#content-favorite-page"
    );
    FavoritePageInitiator.init(contentFavoritePage);
  },
};
export default Favorites;
