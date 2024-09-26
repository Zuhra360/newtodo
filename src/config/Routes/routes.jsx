import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../components/pages/Login";
import { Home } from "../../components/ui/Home";
import { HomePage } from "../../components/pages/HomePage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "home",
    element: <Home />,
  },

]);