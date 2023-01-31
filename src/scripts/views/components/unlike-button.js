class UnlikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<button class="btn-favorite">
      Move from favorite <i class="fa-solid fa-thumbs-down"></i>
    </button>
      `;
  }
}

customElements.define("unlike-button", UnlikeButton);
