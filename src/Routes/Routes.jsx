import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import SignUp from "../pages/SignUp/SignUp";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../pages/My Toys/MyToys";
import AddAToy from "../pages/Add a toy/AddAToy";
import ViewDetails from "../pages/AllToys/ViewDetails";
import UpdateMyToys from "../pages/My Toys/UpdateMyToys";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/myToys',
          element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },

        {
          path: '/add-a-toy',
          element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path: '/view-details',
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
        },
        {
          path: '/update-my-toys/:id',
          element: <PrivateRoutes><UpdateMyToys></UpdateMyToys></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }


        

      ]
    },
    {
      path: '*',
      element: <Error></Error>
      
    }
  ]);


  export default router;
