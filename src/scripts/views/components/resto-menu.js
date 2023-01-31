class RestoMenu extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }
  render() {
    this.innerHTML = `
        <img tabindex="0" src="./images/beverages.png" alt="" />
        <p  tabindex="0"class="name-menu">${this._menu.name}</p>
      `;
  }
}
customElements.define("resto-menu", RestoMenu);
