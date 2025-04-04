"use client";

import AllCategories from "../categories/page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AllFoods from "../foods/page";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-[#404040]">
      <div className="w-full h-auto flex flex-col">
        <Header />

        <div>
          <AllCategories />
        </div>
        <div className="mt-[80px] ">
          <AllFoods />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
