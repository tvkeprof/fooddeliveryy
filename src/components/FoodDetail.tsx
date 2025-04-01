import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

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

  const totalPrice = food ? food.price * quantity : 0;

  const handleAddToCart = () => {
    if (food) {
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
            {/* Image Section */}
            <img
              src={food.image}
              className="w-[300px] h-[200px] object-cover rounded-md"
              alt={food.foodName}
            />

            {/* Text Section */}
            <div className="flex flex-col ml-6 h-full gap-8">
              <DialogHeader>
                <DialogTitle className="text-xl text-red-600 font-semibold">
                  {food.foodName}
                </DialogTitle>
                <p className="mt-2 text-gray-600">{food.ingredients}</p>
              </DialogHeader>

              {/* Price */}
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p>Total price</p>
                  <p className="text-xl font-bold text-black">{`$${totalPrice}`}</p>
                </div>

                {/* Quantity Control */}
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

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-4 py-2 rounded-full mt-4 hover:bg-gray-800"
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
