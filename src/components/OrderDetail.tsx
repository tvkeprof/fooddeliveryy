"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { postOrder } from "@/utils/axios";
import { useState, useEffect } from "react";

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
    const orderData = {
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
    <Sheet>
      <SheetTrigger>
        <img
          src="IconButtonSags.png"
          className="w-[36px] h-[36px]"
          alt="Cart Icon"
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <img
              src="IconButtonSags.png"
              className="w-[36px] h-[36px]"
              alt="Cart Icon"
            />
            Order Detail
          </SheetTitle>
          <h1 className="text-xl font-bold">My Cart</h1>
        </SheetHeader>

        {/* Cart Items */}
        <div className="mt-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <img
                    src={item.image}
                    className="w-[50px] h-[50px] rounded-md"
                    alt={item.foodName}
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
        </div>
      </SheetContent>
    </Sheet>
  );
};
