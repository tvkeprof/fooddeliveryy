"use client";
// import SignUpPage from "@/components/SignUpPage";
// import HomePage from "@/components/HomePage";
// import { useState } from "react";
import LogIn from "./logIn/page";

export default function Home() {
  // const [step, setStep] = useState(1);
  // const nextStep = () => {
  //   setStep((prevStep) => prevStep + 1);
  // };
  // const backStep = () => {
  //   setStep((prevStep) => prevStep - 1);
  // };
  return (
    <div className="bg-white w-full h-screen">
      <LogIn />
      {/* {step === 1 && <SignUpPage onNext={nextStep} />} */}
      {/* {step === 2 && <HomePage/>} */}
    </div>
  );
}
