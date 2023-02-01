class SearchElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form class="search-content" action="">
    <input
      type="text"
      placeholder="Input the keyword to search"
      name="keyword"
      id="keyword"
    />
    <button class="searchButton">Search</button>
  </form>
      `;
  }
}

customElements.define("search-element", SearchElement);
