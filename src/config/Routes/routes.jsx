import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../components/pages/Login";
import { Home } from "../../components/ui/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },

]);