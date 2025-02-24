"use client";
import * as yup from "yup";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import UserSchema from "../validations/userValidation";
import { useEffect } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const validatedData = await UserSchema.validate(userData);
      console.log("Validated Data:", validatedData);
    } catch (err: any) {
      setError(err.message);
      console.error("Validation Error:", err);
    }

    const fe = async () => {
      const value = "";
      try {
        const response = await axios.post("http://localhost:9999/login", {
          body: JSON.stringify(userData),
        });
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    useEffect(() => {
      fe();
    });
  };

  return (
    <div className="w-screen h-screen flex justify-between items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[35%] h-[30%] flex flex-col space-y-4 p-4 justify-center m-auto"
      >
        <ChevronLeft />
        <h1 className="font-bold text-2xl">Create your account</h1>
        <p className="text-[#71717A] text-lg">
          Sign up to explore your favorite dishes.
        </p>

        <input
          type="email"
          name="email"
          className="border p-2 rounded-lg"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          className="border p-2 rounded-lg"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit" className="bg-gray-300 p-3 rounded-lg">
          Let's go
        </button>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex gap-4 justify-center">
          <p className="text-[#71717A] text-lg">Already have an account?</p>
          <a className="text-blue-500 text-lg">Log in</a>
        </div>
      </form>

      <div className="w-[55%] h-[80%] mr-[100px]">
        <img
          src="deliveryWithBike.png"
          className="w-full h-full rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
