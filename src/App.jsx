import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Error from "./components/Error";
import AddOrder from "./pages/AddOrder";
import CompletedOrder from "./pages/CompletedOrder";
import HelpDesk from "./pages/HelpDesk";
import Logout from "./pages/Logout";
import OrderList from "./pages/OrderList";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Setting from "./pages/Settings";

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
        { path: "addorder", element: <AddOrder /> },
        { path: "completed", element: <CompletedOrder /> },
        { path: "helpdesk", element: <HelpDesk /> },
        { path: "logout", element: <Logout /> },
        { path: "orderlist", element: <OrderList /> },
        { path: "transaction", element: <Transactions /> },
        { path: "reports", element: <Reports /> },
        { path: "settings", element: <Setting /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
