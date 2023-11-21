import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Error from "./components/Error";
const App = () => {
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
        // { path: ":id", element: <ProductDetail /> },
        // { path: "cart", element: <CartCheckout /> },
        // { path: "checkout", element: <Checkout /> },
        // { path: "favourite", element: <Favourite /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
