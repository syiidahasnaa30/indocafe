import "./search-element";

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="content-hero">
    <div class="logo-container">
      <img class="logo" src="./images/logo-only.png" alt="Indocafe logo brand" />
      <h1 style="color: #00aa95; font-weight: 600">Indocafe</h1>
      <p style="color: white; font-weight: 600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        suscipit.
      </p>
    </div>
    <search-element></search-element>
  </div>
      `;
  }
}
customElements.define("hero-element", HeroElement);
