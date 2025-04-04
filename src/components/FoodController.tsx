// import { useState } from "react";
// import { FoodDetail } from "./FoodDetail";
// import { OrderDetail } from "./OrderDetail";

// interface Food {
//   _id: string;
//   foodName: string;
//   price: number;
//   ingredients: string;
//   image: string;
//   category: string;
// }

// export const MainComponent = () => {
//   const [cart, setCart] = useState<Food[]>([]);
//   const [selectedFood, setSelectedFood] = useState<Food | null>(null);
//   const [isFoodDetailOpen, setFoodDetailOpen] = useState(false);

//   const addToCart = (food: Food, quantity: number) => {
//     setCart((prevCart) => [
//       ...prevCart,
//       { ...food, price: food.price * quantity },
//     ]);
//   };

//   return (
//     <div>
//       {/* Show OrderDetail with cart data */}
//       <OrderDetail cart={cart} />

//       {/* Open FoodDetail when a food is selected */}
//       <FoodDetail
//         food={selectedFood}
//         isOpen={isFoodDetailOpen}
//         onClose={() => setFoodDetailOpen(false)}
//         addToCart={addToCart}
//       />
//     </div>
//   );
// };
import { useState } from "react";
import { FoodDetail } from "./FoodDetail";
import { OrderDetail } from "./OrderDetail";

interface Food {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
}

export const ParentComponent = () => {
  const [selectedFood] = useState<Food | null>(null);
  const [isFoodDetailOpen, setIsFoodDetailOpen] = useState(false);

  return (
    <div>
      {/* Food Detail Component */}
      <FoodDetail
        food={selectedFood}
        isOpen={isFoodDetailOpen}
        onClose={() => setIsFoodDetailOpen(false)}
      />

      {/* Order Detail Component */}
      <OrderDetail />
    </div>
  );
};
