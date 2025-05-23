"use client";

import { getFoods, getCategories } from "@/utils/axios";
import { useEffect, useState } from "react";
import { FoodDetail } from "@/components/FoodDetail";
import Image from "next/image";
export type Food = {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
};

export type Category = {
  _id: string;
  categoryName: string;
  categoryId: string;
};

const AllFoods = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState<Food>({} as Food);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [foodData, categoryData] = await Promise.all([
          getFoods(),
          getCategories(),
        ]);
        setFoods(foodData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getFoodsByCategory = (categoryId: string) =>
    foods.filter((food) => food.category === categoryId);

  const handleFoodClick = (food: Food) => {
    setSelectedFood(food);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {loading ? (
        <p>Loading...</p>
      ) : categories.length > 0 ? (
        categories.slice(2).map((category) => {
          const categoryFoods = getFoodsByCategory(category._id);
          return (
            <div key={category._id} className="mb-8 p-11">
              <h2 className="text-2xl font-bold text-white mb-4">
                {category.categoryName}
              </h2>
              {categoryFoods.length > 0 ? (
                <ul className="w-full h-auto flex flex-wrap gap-8">
                  {categoryFoods.map((food) => (
                    <li
                      key={food._id}
                      className="w-[400px] relative h-auto outline-1 outline-offset-2 outline-solid p-2 rounded-lg bg-white shadow-lg"
                    >
                      <Image
                        src={food.image}
                        alt={food.foodName}
                        width={330}
                        height={200}
                        className="m-auto object-cover rounded-md mt-2"
                      />

                      <button
                        onClick={() => handleFoodClick(food)}
                        className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-red-600 transition"
                      >
                        +
                      </button>
                      <div className="flex flex-col p-3">
                        <div className="flex gap-6 justify-between">
                          <p className="text-xl text-red-500">
                            {food.foodName}
                          </p>
                          <p className="text-xl text-gray-500">${food.price}</p>
                        </div>
                        <p>{food.ingredients}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">
                  No foods available in this category.
                </p>
              )}
            </div>
          );
        })
      ) : (
        <p>No categories found.</p>
      )}

      <FoodDetail
        food={selectedFood}
        isOpen={dialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default AllFoods;
