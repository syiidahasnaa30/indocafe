class TagsElement extends HTMLElement {
  set tags(tags) {
    this._tags = tags;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._tags.forEach((tag) => {
      const tagElemen = document.createElement("span");
      tagElemen.className = "tag";
      tagElemen.tabIndex = "0";
      tagElemen.innerHTML = tag.name;
      this.appendChild(tagElemen);
    });
  }
}

customElements.define("tags-element", TagsElement);
