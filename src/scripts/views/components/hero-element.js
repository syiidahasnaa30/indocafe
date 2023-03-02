import "./search-element";

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="hero-element">
        <img class="lazyload"src="./images/hero-image_4.jpg" alt="" />
      </div>
      <div class="content-hero">
        <img tabindex="0" 
            class="logo lazyload" 
            src="./images/logo-only.png"
            width="80px"
            height ="80px" 
            alt="Indocafe logo" />
        <h1 tabindex="0" style="color: #00aa95; font-weight: 600">Indocafe</h1>
        <p tabindex="0" style="color: white; font-weight: 600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            suscipit.
        </p>
        <search-element></search-element>
      </div>
      `;
  }
}
customElements.define("hero-element", HeroElement);
