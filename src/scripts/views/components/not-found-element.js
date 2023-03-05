import "../../../styles/not-found.css";
class NotFound extends HTMLElement {
  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture>
        <source type="image/webp" srcset="./images/dissapointed.webp" />
        <source type="image/png"  srcset="./images/dissapointed.png" />
        <img tabindex="0" src="./images/dissapointed.png" alt="not found image"/>
      </picture>
      <h2 tabindex="0">Sorry</h2>
      <p tabindex="0" class="message">
        ${this._message}
      </p>
      `;
  }
}

customElements.define("not-found-element", NotFound);
