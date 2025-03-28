// "use client";

// import { getFoods, getCategories } from "@/utils/axios";
// import { useEffect, useState } from "react";

// interface Food {
//   _id: string;
//   foodName: string;
//   price: number;
//   ingredients: string;
//   image: string;
//   category: string;
// }
// interface Category {
//   _id: string;
//   categoryName: string;
// }

// const AllFoods = ({ categoryId }: { categoryId: string }) => {
//   const [category, setCategory] = useState<Category[]>([]);
//   const [foods, setFoods] = useState<Food[]>([]);

//   const fetchFoods = async () => {
//     const data = await getFoods();
//     if (data) setFoods(data);
//   };
//   const fetchCategories = async () => {
//     const data = await getCategories();
//     if (data) setCategory(data);
//   };
//   useEffect(() => {
//     fetchFoods();
//     fetchCategories();
//   }, [categoryId]);

//   const filteredFoods = categoryId
//     ? foods.filter((food) => food.category === categoryId)
//     : foods;

//   return (
//     <div>
//       <ul className="w-full h-auto flex flex-wrap gap-8">
//         {filteredFoods.length > 0 ? (
//           filteredFoods.map((food) => (
//             <li
//               key={food._id}
//               className="w-[270px] h-auto outline-1 outline-offset-2 outline-solid p-2 rounded-lg bg-white shadow-lg"
//             >
//               <img
//                 src={food.image}
//                 className="w-[230px] h-[130px] object-cover rounded-md mt-2"
//               />
//               <div className="flex items-center justify-between">
//                 <p className="text-lg text-red-400">{food.foodName}</p>
//                 <p className="text-sm text-gray-500">${food.price}</p>
//               </div>
//               <p className="mt-2 text-sm text-white">{food.ingredients}</p>
//             </li>
//           ))
//         ) : (
//           <li>No foods found.</li>
//         )}
//       </ul>
//     </div>
//   );
// };
// export default AllFoods;
"use client";

import { getFoods, getCategories } from "@/utils/axios";
import { useEffect, useState } from "react";

interface Food {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: string;
}

interface Category {
  _id: string;
  categoryName: string;
}

const AllFoods = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [foodData, categoryData] = await Promise.all([
          getFoods(),
          getCategories(),
        ]);
        setFoods(foodData || []);
        setCategories(categoryData || []);
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

  return (
    <div>
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
                      className="w-[400px] h-auto outline-1 outline-offset-2 outline-solid p-2 rounded-lg bg-white shadow-lg"
                    >
                      <img
                        src={food.image}
                        className="w-[330px] h-[200px] m-auto object-cover rounded-md mt-2"
                        alt={food.foodName}
                      />
                      <div className="flex flex-col p-3">
                        <div className="flex gap-6 justify-between">
                          <p className="text-xl text-red-500">
                            {food.foodName}
                          </p>
                          <p className="text-xl text-gray-500">${food.price}</p>
                        </div>
                        <div>
                          <p>{food.ingredients}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-white">
                        {food.ingredients}
                      </p>
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
    </div>
  );
};

export default AllFoods;
