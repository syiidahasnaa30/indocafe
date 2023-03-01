class NotFound extends HTMLElement {
  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img tabindex="0" class="lazyload" src="./images/dissapointed.png" alt="not found image"/>
      <h2 tabindex="0">Sorry</h2>
      <p tabindex="0" class="message">
        ${this._message}
      </p>
      `;
  }
}

customElements.define("not-found-element", NotFound);
