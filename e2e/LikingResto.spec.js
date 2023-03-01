const assert = require("assert");

Feature("LikingResto");
Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

Scenario("liking one resto", async ({ I }) => {
  I.see("Your Favorite Restaurants Not Found", "not-found-element p");
  I.amOnPage("/");

  I.seeElement(".title-content a");

  const firstResto = locate(".title-content a").first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement("like-button");
  I.click("like-button");

  I.amOnPage("/#/favorites");
  I.seeElement("restaurant-item");
  const favoriteRestoName = await I.grabTextFrom(".title-content");

  assert.strictEqual(firstRestoName, favoriteRestoName);
});
