import Home from "../views/pages/home";
import Favorites from "../views/pages/favorites";
import Detail from "../views/pages/detail";

const Routes = {
  "/": Home,
  "/home": Home,
  "/favorites": Favorites,
  "/detail/:id": Detail,
};

export default Routes;
