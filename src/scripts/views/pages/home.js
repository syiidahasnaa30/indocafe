import HomePageInitiator from "../../utils/home-page-initiator";
import "../components/restaurant-list";
import "../components/hero-element";
const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <div id="homeContent">
        <restaurant-list></restaurant-list>
      </div>
    `;
  },
  async afterRender() {
    HomePageInitiator.init(document.querySelector("restaurant-list"));
  },
};

export default Home;
