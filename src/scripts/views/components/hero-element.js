import "./search-element";

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="hero-element">
        <picture>
          <source type="image/webp" srcset="./images/hero-image_4.webp" />
          <source type="image/jpeg" srcset="./images/hero-image_4.jpg" />
          <img class="lazyload"src="./images/hero-image_4.jpeg" alt="" />
        </picture>
      </div>
      <div class="content-hero">
        <picture>
          <source type="image/webp" srcset="./images/logo-only.webp" />
          <source type="image/png" srcset="./images/logo-only.png" />
          <img tabindex="0" 
              class="logo lazyload" 
              src="./images/logo-only.png"
              width="80px"
              height ="80px" 
              alt="Indocafe logo" />
        </picture>
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
