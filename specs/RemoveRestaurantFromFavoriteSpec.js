import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-presenter";
import FavoriteResto from "../src/scripts/data/favorite-resto";
import * as TestFactories from "./helpers/testFactories";

describe("Remove Restaurant from Favorite", () => {
  const addToFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(async () => {
    addToFavoriteButtonContainer();
    await FavoriteResto.putResto({ id: 1 });
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(1);
  });

  it("should show the unlike button when the restaurant has been added to favorite", async () => {
    expect(document.querySelector("unlike-button")).toBeTruthy();
  });

  it("should not show the like button when the restaurant has been added to favorite", async () => {
    expect(document.querySelector("like-button")).toBeFalsy();
  });

  it("Should be able remove restaurant from favorite", async () => {
    document
      .querySelector("#btn-remove-favorite")
      .dispatchEvent(new Event("click"));
    expect(await FavoriteResto.getAllRestaurant()).toEqual([]);
  });

  it("should not throw error if the restaurant is not in the favorite list", async () => {
    // hapus dulu restaurant dari daftar yang disukai
    await FavoriteResto.deleteResto(1);
    // kemudian, simulasikan pengguna menekan widget remove from favorite
    document
      .querySelector("#btn-remove-favorite")
      .dispatchEvent(new Event("click"));
    expect(await FavoriteResto.getAllRestaurant()).toEqual([]);
  });
});
