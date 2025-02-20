"use client";

import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { object, string, number, date, InferType } from "yup";
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
      <div className="bg-white w-[25%] h-[30%] flex flex-col space-y-4 p-4 justify-center m-auto">
        <ChevronLeft />
        <h1>Create your account</h1>
        <p>Sign up to explore your favorite dishes.</p>

        <input placeholder="Enter your email address" />
        <button className="bg-gray-300" onClick={(userSchema) => {}}>
          Let's go
        </button>
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
