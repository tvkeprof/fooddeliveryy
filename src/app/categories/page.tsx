"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/utils/axios";

const AllCategories = () => {
  const [category, setCategory] = useState([]);
  const fetchCategories = async () => {
    const data = await getCategories();
    if (data) setCategory(data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="w-full h-auto mt-[50px] p-11 flex space-y-5">
      <div className="space-y-5">
        <div>
          <h1 className="font-bold text-2xl text-white">Categories</h1>
        </div>
        <div className="flex gap-4 m-auto">
          {category.map((category: any) => (
            <div
              key={category._id}
              className="bg-white w-auto h-auto rounded-full flex text-xl font-bold p-3"
            >
              <p>{category.categoryName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllCategories;
