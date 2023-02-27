import FavoriteRestoSearchPresenter from "../src/scripts/views/pages/favorite-resto/favorite-resto-search-presenter";
import FavoriteResto from "../src/scripts/data/favorite-resto";
import FavoriteRestoSearchView from "../src/scripts/views/pages/favorite-resto/favorite-resto-search-view";

describe("Searching restaurants", () => {
  let presenter;
  let favoriteResto;
  let view;

  const setSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteResto = spyOnAllFunctions(FavoriteResto);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };
  const searchRestaurant = (query) => {
    const keywordElement = document.getElementById("keyword");
    const buttonElement = document.querySelector(".searchButton");
    keywordElement.value = query;
    buttonElement.dispatchEvent(new Event("click"));
  };

  beforeEach(() => {
    setSearchContainer();
    constructPresenter();
  });

  describe("When query is not empty", () => {
    it("should be able to capture the keyword typed by the user", () => {
      searchRestaurant("resto a");
      expect(presenter.latestQuery).toEqual("resto a");
    });

    it("should ask the model to search for liked restaurant ", () => {
      searchRestaurant("resto a");
      expect(favoriteResto.searchResto).toHaveBeenCalledWith("resto a");
    });

    it("should show the restaurants found by Favorite Restaurant", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll(".restaurant-item").length).toEqual(
            3
          );
          done();
        });

      favoriteResto.searchResto.withArgs("resto a").and.returnValues([
        { id: 111, name: "resto abc", description: "" },
        { id: 222, name: "ada juga resto abcde", description: "" },
        { id: 333, name: "ini juga boleh resto a", description: "" },
      ]);

      searchRestaurant("resto a");
    });

    it("should show the name of restaurant found by Favorite Movies", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          const restaurantName = document.querySelectorAll(".title-content");
          expect(restaurantName.item(0).textContent).toEqual("resto abc");
          expect(restaurantName.item(1).textContent).toEqual(
            "ada juga resto abcde"
          );
          expect(restaurantName.item(2).textContent).toEqual(
            "ini juga boleh resto a"
          );
          done();
        });

      favoriteResto.searchResto.withArgs("resto a").and.returnValues([
        { id: 111, name: "resto abc", description: "" },
        { id: 222, name: "ada juga resto abcde", description: "" },
        { id: 333, name: "ini juga boleh resto a", description: "" },
      ]);

      searchRestaurant("resto a");
    });

    it("should show - for found restaurant without name from FavoriteResto", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          const restaurantName = document.querySelectorAll(".title-content");
          expect(restaurantName.item(0).textContent).toEqual("-");
          done();
        });

      favoriteResto.searchResto
        .withArgs("resto a")
        .and.returnValues([{ id: 111, description: "" }]);

      searchRestaurant("resto a");
    });
  });

  describe("When query is empty", () => {
    it("should capture the query as empty", () => {
      searchRestaurant(" ");
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant("    ");
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant("");
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurant("\t");
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it("should show all favorite restaurant", () => {
      searchRestaurant("");
      expect(favoriteResto.getAllRestaurant).toHaveBeenCalled();
    });
  });

  describe("When no favorite restaurant could be found", () => {
    it("should show the empty message", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll("not-found-element").length).toEqual(
            1
          );
          done();
        });

      favoriteResto.searchResto.withArgs("resto a").and.returnValues([]);
      searchRestaurant("resto a");
    });

    it("shouid not show any restaurant", (done) => {
      document
        .getElementById("content-favorite-page")
        .addEventListener("restaurants:updated", () => {
          expect(document.querySelectorAll(".restaurant-item").length).toEqual(
            0
          );
          done();
        });

      favoriteResto.searchResto.withArgs("resto a").and.returnValues([]);
      searchRestaurant("resto a");
    });
  });
});
