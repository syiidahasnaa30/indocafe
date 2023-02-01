class Review extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `    
      <img tabindex="0" src="./images/user.png" alt="reviewer image" />
      <div tabindex="0" class="review-content">
        <p tabindex="0" class="reviewer-name">${this._review.name}</p>
        <p tabindex="0" class="review-date">Posted at ${this._review.date}</p>
        <p tabindex="0" class="content-of-review">"${this._review.review}"</p>
      </div>   
    `;
  }
}
customElements.define("review-element", Review);
