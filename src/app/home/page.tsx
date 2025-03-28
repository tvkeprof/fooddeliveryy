"use client";

import { useUser } from "@/components/AuthProvider/UserProvider";
import AllCategories from "../categories/page";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AllFoods from "../foods/page";

const HomePage = ({ categoryId }: { categoryId: string }) => {
  const { email, role } = useUser();
  console.log("email", email, role);
  return (
    <div className="w-full h-full bg-[#404040]">
      <div className="w-full h-auto flex flex-col">
        <Header />

        <div>
          <AllCategories />
        </div>
        <div className="mt-[80px] ">
          <AllFoods categoryId={categoryId} />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
