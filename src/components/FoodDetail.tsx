// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { useState } from "react";

// interface Food {
//   _id: string;
//   foodName: string;
//   price: number;
//   ingredients: string;
//   image: string;
//   category: string;
// }

// interface FoodDetailProps {
//   food: Food | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const FoodDetail = ({ food, isOpen, onClose }: FoodDetailProps) => {
//   const [quantity, setQuantity] = useState(1);

//   const totalPrice = food ? food.price * quantity : 0;

//   const handleAddToCart = () => {
//     if (food) {
//       const cartItem = {
//         ...food,
//         quantity,
//         totalPrice,
//       };
//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

//       existingCart.push(cartItem);

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       console.log(
//         `Added ${quantity} of ${food.foodName} to the cart at $${totalPrice}`
//       );
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-[800px] max-h-[500px] flex items-center justify-center p-4">
//         {food && (
//           <div className="flex items-center w-full h-full">
//             <img
//               src={food.image}
//               className="w-[300px] h-[200px] object-cover rounded-md"
//               alt={food.foodName}
//             />
//             <div className="flex flex-col ml-6 h-full gap-8">
//               <DialogHeader>
//                 <DialogTitle className="text-xl text-red-600 font-semibold">
//                   {food.foodName}
//                 </DialogTitle>
//                 <p className="mt-2 text-gray-600">{food.ingredients}</p>
//               </DialogHeader>
//               <div className="flex justify-between">
//                 <div className="flex flex-col">
//                   <p>Total price</p>
//                   <p className="text-xl font-bold text-black">{`$${totalPrice}`}</p>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
//                     className="text-lg text-gray-700"
//                   >
//                     -
//                   </button>
//                   <p>{quantity}</p>
//                   <button
//                     onClick={() => setQuantity((prev) => prev + 1)}
//                     className="text-lg text-gray-700"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={handleAddToCart}
//                 className="bg-black text-white px-4 py-2 rounded-full mt-4 hover:bg-gray-800"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface Food {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
}

interface FoodDetailProps {
  food: Food | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FoodDetail = ({ food, isOpen, onClose }: FoodDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("userAddress");
    setAddress(savedAddress);
  }, []);

  const totalPrice = food ? food.price * quantity : 0;

  const handleAddToCart = () => {
    if (!address) {
      alert("Please set your delivery address first.");
      return;
    }

    if (food) {
      const cartItem = {
        ...food,
        quantity,
        totalPrice,
      };
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      existingCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(existingCart));

      console.log(
        `Added ${quantity} of ${food.foodName} to the cart at $${totalPrice}`
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] max-h-[500px] flex items-center justify-center p-4">
        {food && (
          <div className="flex items-center w-full h-full">
            <img
              src={food.image}
              className="w-[300px] h-[200px] object-cover rounded-md"
              alt={food.foodName}
            />
            <div className="flex flex-col ml-6 h-full gap-8">
              <DialogHeader>
                <DialogTitle className="text-xl text-red-600 font-semibold">
                  {food.foodName}
                </DialogTitle>
                <p className="mt-2 text-gray-600">{food.ingredients}</p>
              </DialogHeader>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p>Total price</p>
                  <p className="text-xl font-bold text-black">{`$${totalPrice}`}</p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="text-lg text-gray-700"
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`px-4 py-2 rounded-full mt-4 ${
                  address
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
                disabled={!address}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
