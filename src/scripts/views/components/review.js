class Review extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture>
        <source  type="image/webp" srcset="./images/user.webp" />
        <source  type="image/png" srcset="./images/user.png" />
        <img tabindex="0"  src="./images/user.png" alt="reviewer image" />
      </picture>
      <div tabindex="0" class="review-content">   
        <p tabindex="0" class="reviewer-name">${this._review.name}</p>
        <p tabindex="0" class="review-date">Posted at ${this._review.date}</p>
        <p tabindex="0" class="content-of-review">"${this._review.review}"</p>
      </div>   
    `;
  }
}
customElements.define("review-element", Review);
