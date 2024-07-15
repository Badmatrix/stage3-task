import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import Error from "./Ui/Error";
import Cart from "./Pages/Cart";
import ProductMenu, { loader as productsLoader } from "./Pages/ProductMenu";
import Product, { loader as detailsLoader } from "./Pages/Product";
import CheckOut from "./Pages/CheckOut";
import SuccessOrder from "./Order/SuccessOrder";
import { useState } from "react";

function App() {
  const [pageNum, setPageNum] = useState(1);
  function handlePageInc() {
    if (pageNum < 4) {
      setPageNum((num) => num + 1);
      scrollTo(0,100);
    }
  }
  function handlePageDec() {
    if (pageNum > 1) {
      setPageNum((num) => num - 1);
      scrollTo(0, 100);
    }
  }
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/",
          element: (
            <ProductMenu
              handlePageInc={handlePageInc}
              handlePageDec={handlePageDec}
              pageNum={pageNum}
            />
          ),
          loader: () => productsLoader(pageNum),
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
          element: <CheckOut />,
        },
        {
          path: "/success",
          element: <SuccessOrder />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
