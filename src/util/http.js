import supabase from "./supabase";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const fetchFood = async () => {
  let { data, error } = await supabase.from("foods").select("*");

  if (error) {
    error.message = "Failed to fetch food Items";
  }
  return { data, error };
};

export const fetchOrderItems = async () => {
  const response = await fetch(
    "https://fast-food-44b06-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
  );

  if (!response.ok) {
    const error = new Error("Can't fetch orders! please try again");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  return data;
};

export const sendOrderData = async (items) => {
  const response = await fetch(
    "https://fast-food-44b06-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const error = new Error("An Error occur while Sending items");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  return data;
};

export const sendCartData = async (items) => {
  const response = await fetch(
    "https://fast-food-44b06-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
    {
      method: "PUT",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const error = new Error(
      "An Error occur while adding to cart. Please Try again"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  return response.json();
};

export const fetchCartData = async () => {
  const response = await fetch(
    "https://fast-food-44b06-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
  );

  if (!response.ok) {
    const error = new Error(
      "An Error occur while fetching cart data. Please try again"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  return data;
};
