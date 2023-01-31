import "./resto-menu";

class RestoMenuList extends HTMLElement {
  set restoMenuList(restoMenuList) {
    this._resto_menu_list = restoMenuList;
    this.render();
  }
  render() {
    this.innerHTML = ``;
    this._resto_menu_list.forEach((restoMenu) => {
      const menuElemen = document.createElement("resto-menu");
      menuElemen.menu = restoMenu;
      menuElemen.tabIndex = "0";
      this.appendChild(menuElemen);
    });
  }
}
customElements.define("resto-menu-list", RestoMenuList);
