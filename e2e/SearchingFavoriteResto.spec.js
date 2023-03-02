const assert = require("assert");

Feature("SearchingFavoriteResto");
Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

Scenario("searching favorite movies", async ({ I }) => {
  I.see("Your Favorite Restaurants Not Found", "not-found-element p");

  I.amOnPage("/");

  I.seeElement(".title-content a");

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate(".title-content a").at(i));
    I.seeElement("like-button");
    I.click("like-button");
    I.seeElement("#detail-title");
    names.push(await I.grabTextFrom("#detail-title"));
    I.amOnPage("/");
  }

  I.amOnPage("/#/favorites");
  I.seeElement("#keyword");

  const searchQuery = names[1].substring(1, 3);
  const matchingResto = names.filter(
    (name) => name.indexOf(searchQuery) !== -1
  );

  I.fillField("#keyword", searchQuery);
  I.seeElement(".searchButton");
  I.click(".searchButton");

  const visibleLikedResto = await I.grabNumberOfVisibleElements(
    "restaurant-item"
  );
  assert.strictEqual(matchingResto.length, visibleLikedResto);

  matchingResto.forEach(async (name, index) => {
    const foundedResto = locate(".title-content a").at(index + 1);
    const visibleName = await I.grabTextFrom(foundedResto);
    assert.strictEqual(name, visibleName);
  });
});
