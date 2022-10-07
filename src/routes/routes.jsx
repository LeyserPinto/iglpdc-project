
import {  createBrowserRouter} from "react-router-dom";
import About from "../view/pages/about";

import Home from "../view/pages/home";
import Sermons from "../view/pages/sermons";
import TeamPage from "../view/pages/teams";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Teams",
    element: <TeamPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/predicas",
    element: <Sermons />,
  },

]);

export default router