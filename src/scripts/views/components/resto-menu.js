class RestoMenu extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }
  render() {
    this.innerHTML = `
        <picture>
          <source  type="image/webp" data-srcset="./images/beverages.webp" />
          <source  type="image/png" data-srcset="./images/beverages.png" />
          <img tabindex="0"
          class="lazyload" 
          data-src="./images/beverages.png"
          src="./images/beverages.png" 
          alt="image of menu ${this._menu.name}"
          width="100%" />
        </picture>
        <p  tabindex="0"class="name-menu">${this._menu.name}</p>
      `;
  }
}
customElements.define("resto-menu", RestoMenu);
