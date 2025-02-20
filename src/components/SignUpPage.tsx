"use client";


import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
export const SignUpPage = () => {
  const fe = async () => {
    try {
      const response = await fetch("http://localhost:3000/test");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fe();
  });
  return (
    <div className="w-screen h-screen flex justify-between items-center">
      <div className="bg-white w-[35%] h-[30%] flex flex-col space-y-4 p-4 justify-center m-auto">
        <ChevronLeft className="w-[200px] h-[200px]"/>
        <h1 className="font-bold text-2xl">Create your account</h1>
        <p className="text-[#71717A] text-lg">Sign up to explore your favorite dishes.</p>

        <input className="border p-2 rounded-lg"  placeholder="Enter your email address" />
        <button className="bg-gray-300 p-3 rounded-lg" onClick={(userSchema) => {}}>
          Let's go
        </button>
        <div className="flex gap-4 justify-center">
          <p className="text-[#71717A] text-lg">Already have an account?</p>
          <a className="text-blue-500 text-lg">Log in</a>
        </div>
      </div>
      <div className="  w-[55%] h-[80%] mr-[100px]">
        <img
          src="deliveryWithBike.png"
          className="w-full h-full rounded-[10px]"
        />
      </div>
    </div>
  );
};
