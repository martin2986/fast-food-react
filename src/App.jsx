import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Error from "./components/Error/ErrorPage";
import RootLayout from "./components/RootLayout";
import { sendCartData, fetchCartData } from "./store/cart-Actions";
import ListSkeleton from "./components/Skeleton/OrderListSkeleton/ListSkeleton";
import ReportSkeleton from "./components/Skeleton/ReportSkeleton/ReportSkeleton";
import Home from "./pages/Home";
import CartInfo from "./pages/CartInfo";

const OrderList = lazy(() => import("./pages/OrderList"));
const Reports = lazy(() => import("./pages/Reports"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error message="Ops can't find this page" />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "orderlist",
        element: (
          <Suspense
            fallback={
              <div className="h-100 w-100">
                <ListSkeleton list={15} />
              </div>
            }
          >
            <OrderList />
          </Suspense>
        ),
      },
      { path: "cart", element: <CartInfo /> },
      {
        path: "reports",
        element: (
          <Suspense
            fallback={
              <div className="h-100 w-100">
                <ReportSkeleton />
              </div>
            }
          >
            <Reports />
          </Suspense>
        ),
      },
    ],
  },
]);
let initials = true;
const App = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initials) {
      initials = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
