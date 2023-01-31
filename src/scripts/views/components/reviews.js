import "./review";

class Reviews extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }
  render() {
    this.innerHTML = ``;
    this._reviews.forEach((review) => {
      const ReviewElement = document.createElement("review-element");
      ReviewElement.className = "review";
      ReviewElement.tabIndex = "0";
      ReviewElement.review = review;
      this.appendChild(ReviewElement);
    });
  }
}

customElements.define("reviews-element", Reviews);
