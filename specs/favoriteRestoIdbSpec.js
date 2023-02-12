import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";
import FavoriteResto from "../src/scripts/data/favorite-resto";

describe("Favorite Resto Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteResto.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteResto.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
