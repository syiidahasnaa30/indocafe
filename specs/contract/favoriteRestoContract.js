const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it("should return the restaurant that has been added", async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getResto(1)).toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2)).toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3)).toEqual(undefined);
  });

  it("should refuse a restaurant from being added if it does not have the correct property", async () => {
    favoriteResto.putResto({ aProperty: "property" });

    expect(await favoriteResto.getAllRestaurant()).toEqual([]);
  });

  it("can return all of the restaurants that have been added", async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it("should remove favorite resto", async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    expect(await favoriteResto.getAllRestaurant()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it("should handle request to remove a Restaurants even though the Restaurants has not been added", async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  it("should be able to search for restaurants", async () => {
    favoriteResto.putResto({ id: 1, name: "resto a" });
    favoriteResto.putResto({ id: 2, name: "resto abc" });
    favoriteResto.putResto({ id: 3, name: "ini mah resto abcd" });

    expect(await favoriteResto.searchResto("resto a")).toEqual([
      { id: 1, name: "resto a" },
      { id: 2, name: "resto abc" },
      { id: 3, name: "ini mah resto abcd" },
    ]);
  });
};

export { itActsAsFavoriteRestoModel };
