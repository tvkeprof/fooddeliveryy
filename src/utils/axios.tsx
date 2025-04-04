import { Category, Food } from "@/app/foods/page";
import axios, { AxiosResponse } from "axios";
import { Key, ReactNode } from "react";

export interface Order {
  foodOrderItems: {
    food: string;
    quantity: number;
  }[];
  updatedAt: string | number | Date;
  totalPrice: ReactNode;
  _id: Key | null | undefined;
  id: string;
  foodId: string;
  quantity: number;
  total: number;
  status: string;
}

export interface PostOrderData {
  userId: string;
  items: {
    _id: string;
    quantity: number;
    image: string;
  }[];
  totalAmount: number;
  status: string;
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response: AxiosResponse<Category[]> = await axios.get(
      "https://food-delivery-service-te0i.onrender.com/category"
    );
    return response.data;
  } catch (err) {
    console.log("err while getting categories", err);
    throw err;
  }
};

// Fetch foods
export const getFoods = async (): Promise<Food[]> => {
  try {
    const response: AxiosResponse<Food[]> = await axios.get(
      "https://food-delivery-service-te0i.onrender.com/food"
    );
    return response.data; // Assumes response.data is of type Food[]
  } catch (err) {
    console.log("err while getting foods", err);
    throw err;
  }
};

// Add address
export const addAddress = async (
  address: string,
  id?: string
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.put(
      `https://food-delivery-service-te0i.onrender.com/user/addAdress/${id}`,
      { address }
    );
    return response; // Return the AxiosResponse object
  } catch (err) {
    console.log("err while getting address", err);
    throw err;
  }
};

// Post order
export const postOrder = async (
  orderData: PostOrderData
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.post(
      "https://food-delivery-service-te0i.onrender.com/order",
      orderData
    );
    return response; // Return the AxiosResponse object
  } catch (err) {
    console.log("err while getting order", err);
    throw err;
  }
};

// Fetch orders
export const getOrder = async (): Promise<Order[]> => {
  try {
    const response: AxiosResponse<Order[]> = await axios.get(
      "https://food-delivery-service-te0i.onrender.com/order"
    );
    return response.data; // Assumes response.data is of type Order[]
  } catch (err) {
    console.log("err while getting order", err);
    throw err;
  }
};
