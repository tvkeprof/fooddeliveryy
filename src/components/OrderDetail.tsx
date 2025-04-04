"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { postOrder, getOrder } from "@/utils/axios";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component for optimized images
import { Order, PostOrderData } from "@/utils/axios";

interface Food {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
  quantity: number;
  totalPrice: number;
}

export const OrderDetail = () => {
  const [cart, setCart] = useState<Food[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string>("");

  const fetchOrders = async () => {
    try {
      const data = await getOrder();
      if (data) {
        setOrders(data);
      } else {
        setError("No orders found.");
      }
    } catch (err) {
      console.error("🔥 Error fetching orders:", err);
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch cart data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);

    const total = savedCart.reduce(
      (acc: number, item: Food) => acc + item.totalPrice,
      0
    );
    setTotalAmount(total);
  }, []);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    const userId = "65fd1a2b1234567890abcd12";
    const orderData: PostOrderData = {
      userId,
      items: cart.map(({ _id, quantity, image }) => ({
        _id,
        quantity,
        image,
      })),
      totalAmount,
      status: "PENDING",
    };

    console.log("🛒 Sending Order Data:", JSON.stringify(orderData, null, 2));

    try {
      const response = await postOrder(orderData);
      console.log("✅ Order Response:", response?.data);
      alert(`Order placed successfully! Total: $${totalAmount.toFixed(2)}`);

      localStorage.removeItem("cart");
      setCart([]);
      setTotalAmount(0);
    } catch (err) {
      console.error("🔥 Error while posting order:", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button to open Sheet */}
      <Sheet>
        <SheetTrigger>
          <Image
            src="/IconButtonSags.png"
            alt="Cart Icon"
            width={36}
            height={36}
          />
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent className="h-[100vh] overflow-y-auto">
          {/* Add height and overflow */}
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Image
                src="/IconButtonSags.png"
                alt="Cart Icon"
                width={36}
                height={36}
              />
              Order Detail
            </SheetTitle>
          </SheetHeader>
          {/* Show error if any */}
          {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
          {/* Display error */}
          {/* Tabs Inside Sheet */}
          <Tabs defaultValue="cart" className="w-full mt-4">
            <TabsList className="flex justify-between border-b pb-2">
              <TabsTrigger value="cart">Cart</TabsTrigger>
              <TabsTrigger value="history">Order</TabsTrigger>
            </TabsList>

            {/* Cart Tab */}
            <TabsContent value="cart">
              {cart.length === 0 ? (
                <p className="text-gray-500 mt-4">Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b py-2"
                    >
                      <Image
                        src={item.image}
                        alt={item.foodName}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <p className="text-lg font-medium">{item.foodName}</p>
                      <p className="text-lg font-bold">{`$${item.totalPrice.toFixed(
                        2
                      )}`}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  ))}

                  {/* Checkout Section */}
                  <div className="mt-6 border-t pt-4">
                    <div>
                      <p>Payment info</p>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <p>Total Amount:</p>
                      <p>${totalAmount.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className={`bg-red-500 text-white px-6 py-2 rounded-full w-full mt-4 hover:bg-red-300 ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Checkout"}
                    </button>
                  </div>
                </>
              )}
            </TabsContent>

            {/* Order History Tab */}
            <TabsContent value="history">
              {orders
                .slice()
                .reverse()
                .map((order) => (
                  <div key={order._id}>
                    <div>
                      <div className="flex justify-between">
                        <div className="flex gap-4">
                          <p className="font-bold">Total price:</p>
                          <p>${order.totalPrice}</p>
                        </div>
                        <p>{order.status}</p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-4">
                          <p className="font-bold">Date:</p>
                          <p className="h-[60px]">
                            {new Date(order.updatedAt).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-bold">x</p>
                          <p>{order.foodOrderItems.length}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </>
  );
};
