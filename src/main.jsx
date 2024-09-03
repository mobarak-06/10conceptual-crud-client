import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import MyCart from "./pages/MyCart/MyCart.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
