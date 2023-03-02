import "./search-element";

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="hero-element">
        <picture>
          <source class="lazyload" type="image/webp" data-srcset="./images/hero-image_4.webp" />
          <source class="lazyload" type="image/jpeg" data-srcset="./images/hero-image_4.jpg" />
          <img class="lazyload" data-src="./images/hero-image_4.jpeg" alt="" />
        </picture>
      </div>
      <div class="content-hero">
        <picture>
          <source class="lazyload" type="image/webp" data-srcset="./images/logo-only.webp" />
          <source class="lazyload" type="image/png" data-srcset="./images/logo-only.png" />
          <img tabindex="0" 
              class="logo lazyload" 
              data-src="./images/logo-only.png"
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
