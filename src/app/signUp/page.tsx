"use client";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { EmailOnlySchema, UserSchema } from "@/validations/userValidation";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignUpPage = () => {
  const router = useRouter();

  const goToLogIn = () => {
    router.push("/logIn");
  };

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const submitUserData = async () => {
    try {
      const response = await axios.post(
        "https://food-delivery-service-te0i.onrender.com/user",
        formData
      );
      console.log("Signup success:", response.data);
      router.push("/logIn");
    } catch (err: unknown) {
      console.error("Signup failed:", err);
      setError("Failed to create account.");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (step === 1) {
        await EmailOnlySchema.validate({ email: formData.email });
        setStep(2);
      } else if (step === 2) {
        await UserSchema.validate(formData);
        await submitUserData();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Validation failed.";
      setError(message);
      console.error("Validation Error:", err);
    }
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

        {step === 1 && (
          <input
            type="email"
            name="email"
            className="border p-2 rounded-lg"
            placeholder="Enter your email address"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        )}

        {step === 2 && (
          <input
            type="password"
            name="password"
            className="border p-2 rounded-lg"
            placeholder="Enter your password"
            value={formData.password}
            required
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        )}

        <button type="submit" className="bg-gray-300 p-3 rounded-lg">
          {step === 1 ? "Next" : "Let's go"}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex gap-4 justify-center">
          <p className="text-[#71717A] text-lg">Already have an account?</p>
          <button
            type="button"
            onClick={goToLogIn}
            className="text-blue-500 text-lg"
          >
            Log in
          </button>
        </div>
      </form>

      <div className="w-[55%] h-[80%] mr-[100px] relative">
        <Image
          src="/deliveryWithBike.png"
          alt="Delivery person with bike"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
          priority
        />
      </div>
    </div>
  );
};

export default SignUpPage;
