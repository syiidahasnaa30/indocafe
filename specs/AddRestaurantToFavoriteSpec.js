import FavoriteResto from "../src/scripts/data/favorite-resto";
import * as TestFactories from "./helpers/testFactories";

describe("Add Restaurant to Favorite-List", () => {
  const addToFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(() => {
    addToFavoriteButtonContainer();
  });

  it("should show the like button when the restaurant has not been added to favorite before", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector("like-button")).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been added to favorite before", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector("unlike-button")).toBeFalsy();
  });

  it("Should be able add restaurant to favorite list", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector("#add-favorite-button")
      .dispatchEvent(new Event("click"));
    const restaurant = await FavoriteResto.getResto(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteResto.deleteResto(1);
  });

  it("should not add a restaurant again when its already added to favorite", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteResto.putResto({ id: 1 });
    document
      .querySelector("#add-favorite-button")
      .dispatchEvent(new Event("click"));
    //tidak ada data yang tersimpan ganda
    expect(await FavoriteResto.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteResto.deleteResto(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});
    document
      .querySelector("#add-favorite-button")
      .dispatchEvent(new Event("click"));
    expect(await FavoriteResto.getAllRestaurant()).toEqual([]);
  });
});
