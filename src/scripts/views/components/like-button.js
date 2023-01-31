class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<button class="btn-favorite">
      Add to favorite <i class="fa-solid fa-thumbs-up"></i>
    </button>
      `;
  }
}

customElements.define("like-button", LikeButton);
