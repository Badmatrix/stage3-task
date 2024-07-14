import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import Error from "./Ui/Error";
// import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductMenu, { loader as productsLoader } from "./Pages/ProductMenu";
import Product, { loader as detailsLoader } from "./Pages/Product";
import CheckOut from "./Pages/CheckOut";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/",
          element: <ProductMenu />,
          loader: productsLoader,
          errorElement: <Error />,
        },
        {
          path: "/:id",
          element: <Product />,
          loader: detailsLoader,
          errorElement: <Error />,
        },
        {
          path: "/order/new",
          element: <CheckOut/>
        },
      ],
      errorElement:<Error/>
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
