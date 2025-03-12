

"use client";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { EmailOnlySchema,  UserSchema} from "@/validations/userValidation";
import axios from "axios";

import { useRouter } from "next/navigation";

const SignUpPage = ({ onNext}: any) => {
  const Router = useRouter();
  const goToLogIn = ()=>{
    Router.push("/logIn")
  }
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); 
  const [step, setStep] = useState(1);

  const submitUserData = async () => {
    try {
      const response = await axios.post("http://localhost:9999/user", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };
    
    try {
      if (step === 1) {
        const validatedEmail = await EmailOnlySchema.validate({
          email: formData.email,
        });
        console.log("Validated Email:", validatedEmail);
        setIsEmailValid(true); 
        setStep(2); 
      } else if (step === 2) {
        
        const validatedPassword = await UserSchema.validate(userData);
        console.log("Validated Data:", validatedPassword);
        
        submitUserData()
        onNext();  
      }
    } catch (err: any) {
      setError(err.message);
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
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        )}

        {step === 2 && (
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
        )}

        <button type="submit" className="bg-gray-300 p-3 rounded-lg">
          {step === 1 ? "Next" : "Let's go"}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex gap-4 justify-center">
          <p className="text-[#71717A] text-lg">Already have an account?</p>
          <a onClick={goToLogIn}
          className="text-blue-500 text-lg">Log in</a>
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
