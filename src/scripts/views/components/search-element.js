class SearchElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form class="search-content" action="post">
    <input
      tabindex="0"
      type="text"
      placeholder="Search restaurant by it's name, category or menu"
      name="keyword"
      id="keyword"
    />
    <button class="searchButton">Search</button>
  </form >
      `;
  }
}

customElements.define("search-element", SearchElement);
