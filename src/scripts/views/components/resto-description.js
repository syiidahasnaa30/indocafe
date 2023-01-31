import "./tags-element";
import FavoriteButtonInitiator from "../../utils/favorite-button-initiator";

class RestoDescription extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }
  render() {
    this.innerHTML = `
    <h1 id="detail-title" tabindex="0">${this._resto.name}</h1>
    <div id="favorite-button-container"></div>
    <div class="section-rating-map">
    <div class="section-rating" tabindex="0">
    <p tabindex="0"><i class="fa-sharp fa-solid fa-star"></i> ${
      this._resto.rating
    }</p>
    <p tabindex="0">Ratings</p>
    </div>
    <div class="section-map" tabindex="0">
    <p tabindex="0">
    <i class="fa-solid fa-location-dot"></i> ${
      this._resto.address + ", " + this._resto.city
    }</p>
    </div>
    </div>
    <p class="description" tabindex="0">
    <span style="font-weight:500">Description :</span>
    <br>${this._resto.description}</p>`;

    const favoriteButon = "#favorite-button-container";
    FavoriteButtonInitiator.init({
      favoriteButtoncContainer: document.querySelector(favoriteButon),
      restaurant: this._resto,
    });
    const tagsElemen = document.createElement("tags-element");
    tagsElemen.className = "tags";
    tagsElemen.tags = this._resto.categories;
    this.appendChild(tagsElemen);
  }
}

customElements.define("resto-description", RestoDescription);
