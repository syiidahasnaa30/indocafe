class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <img
          tabindex="0"
          src="./images/heros/hero-image_2.jpg"
          width="450"
          alt=""
        />
      `;
  }
}
customElements.define("hero-elemen", HeroElement);
