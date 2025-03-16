

"use client";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const LogIn = ({})=> {

    const Router = useRouter();

    return(
        <div className="w-screen h-screen flex items-center">
            <div className="flex flex-col bg-white w-[35%] h-[30%] space-y-4 p-4 justify-center m-auto">


            <ChevronLeft/>
            <h1 className="font-bold text-2xl">Log in</h1>
            <p>Log in to enjoy your favorite dishes</p>

            <input type="email"
            name="email"
            className="border p-2 rounded-lg"
            placeholder="Enter your email address"
            />
            <input
            type="password"
            name="password"
            className="border p-2 rounded-lg"
            placeholder="Enter your password"/>

            <a className=" border">Forgor password</a>

            <button type="submit" className="bg-gray-300 p-3 rounded-lg">Let's go</button>
            <div className="flex gap-4 justify-center">
                <p className="text-[#71717A] text-lg">Don't have an account?</p>
                <a className="text-blue-500 text-lg">Sign up</a>
            </div>
            </div>
            <div className="w-[55%] h-[80%] mr-[100px]">
                <img
                src="deliveryWithBike.png"
                className="w-full h-full rounded-[10px]"/>
            </div>


        </div>
    )
}
export default LogIn;