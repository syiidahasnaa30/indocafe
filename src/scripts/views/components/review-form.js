class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <form class="review-form" action="post">
        <input
            tabindex="0"
            type="text"
            placeholder="Enter your name"
            name="input-name"
            id="input-name"
        />
        <textarea
            tabindex="0"
            type="text"
            placeholder="Enter your review"
            name="input-review"
            id="input-review"
            rows="5"
        ></textarea>
        <button class="submitButton">Submit Your Review</button>
        </form>
      `;
  }
}
customElements.define("review-form", ReviewForm);
