import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import { queryClient } from "./util/http";
import "react-loading-skeleton/dist/skeleton.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor="#dbdbdc" highlightColor="#f3f3f4">
          <App />
        </SkeletonTheme>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
