import "../components/hero-element";
import HomePageInitiator from "../../utils/home-page-initiator";

const Home = {
  async render() {
    return `
      <hero-element id="hero" class="hero-element"></hero-element>
      <div id="homeContent"></div>
    `;
  },
  async afterRender() {
    HomePageInitiator.init(document.querySelector("#homeContent"));
  },
};

export default Home;
