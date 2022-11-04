import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Orders from "../../Pages/Home/Orders/Orders";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
