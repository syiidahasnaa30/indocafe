import FavoriteRestoShowPresenter from "../src/scripts/views/pages/favorite-resto/favorite-resto-show-presenter";
import FavoriteRestoSearchView from "../src/scripts/views/pages/favorite-resto/favorite-resto-search-view";
import FavoriteResto from "../src/scripts/data/favorite-resto";

describe("Showing all favorite restaurants", () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe("When no restaurant have been liked", () => {
    it("should ask for the favorite resto", () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteResto);
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants,
      });
      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it("should show the information that no restaurant have been liked", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll("not-found-element").length).toEqual(
            1
          );
          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteResto);
      favoriteRestaurants.getAllRestaurant.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe("When favorite restaurants exist", () => {
    it("should show the restaurants", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll(".restaurant-item").length).toEqual(
            2
          );
          done();
        });
      const favoriteRestaurants = spyOnAllFunctions(FavoriteResto, false);
      favoriteRestaurants.getAllRestaurant.and.returnValues([
        {
          id: 11,
          name: "A",
          description: "Sebuah resto A",
        },
        {
          id: 22,
          name: "B",
          description: "Sebuah resto B",
        },
      ]);
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
