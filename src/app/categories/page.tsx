// "use client";

// import { useEffect, useState } from "react";
// import { getCategories } from "@/utils/axios";
// import { Category } from "../foods/page";

// const AllCategories = () => {
//   const [category, setCategory] = useState<Category[]>([]);
//   const fetchCategories = async () => {
//     const data = await getCategories();
//     if (data) setCategory(data);
//   };
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <div className="w-full h-auto items-center justify-center mt-[50px] p-11 flex space-y-5">
//       <div className="space-y-5">
//         <div>
//           <h1 className="font-bold text-2xl text-white">Categories</h1>
//         </div>
//         <div className="flex gap-4 m-auto">
//           {category.map((category: Category) => (
//             <div
//               key={category._id}
//               className="bg-white w-auto h-auto rounded-full flex text-xl font-bold p-3"
//             >
//               <p>{category.categoryName}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AllCategories;
"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/utils/axios";
import { Category } from "../foods/page";

const AllCategories = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const fetchCategories = async () => {
    const data = await getCategories();
    if (data) setCategory(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (id: string) => {
    setSelectedCategoryId((prev) => (prev === id ? null : id)); // toggle
  };

  return (
    <div className="w-full h-auto items-center justify-center mt-[50px] p-11 flex space-y-5">
      <div className="space-y-5">
        <div>
          <h1 className="font-bold text-2xl text-white">Categories</h1>
        </div>
        <div className="flex gap-4 m-auto flex-wrap">
          {category.map((cat) => {
            const isSelected = selectedCategoryId === cat._id;

            return (
              <div
                key={cat._id}
                onClick={() => handleCategoryClick(cat._id)}
                className={`cursor-pointer w-auto h-auto rounded-full flex text-xl font-bold p-3 transition-all duration-300 ${
                  isSelected
                    ? "bg-yellow-400 text-black ring-2 ring-yellow-600"
                    : "bg-white text-black"
                }`}
              >
                <p>{cat.categoryName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
