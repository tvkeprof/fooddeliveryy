"use client";

import MotionText from "./MotionText";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#18181B]">
      <div className="w-full h-[90px] mt-[70px] bg-[#EF4444] flex justify-between items-center">
        <MotionText />
      </div>

      <div className="flex justify-between text-white gap-x-4 mt-[70px] px-10">
        <div>
          <Image
            src="/LogoContainColumn.png" // Update the src path accordingly
            alt="Nomnom Logo"
            width={150} // Set appropriate width
            height={50} // Set appropriate height
          />
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-[#71717A]">NOMNOM</p>
          <p>Home</p>
          <p>Contact us</p>
          <p>Delivery zone</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-[#71717A]">MENU</p>
          <p>Appetizers</p>
          <p>Salads</p>
          <p>Pizzas</p>
          <p>Main dishes</p>
          <p>desserts</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-[#18181B]">.</p>
          <p>Side dish</p>
          <p>Brunch</p>
          <p>Desserts</p>
          <p>Beverages</p>
          <p>Fish & Sea foods</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#71717A]">FOLLOW US</p>
          <div className="flex">
            <a>
              <Image
                src="/fbIcon.png" // Update the src path accordingly
                alt="Facebook Icon"
                width={24} // Set appropriate width
                height={24} // Set appropriate height
              />
            </a>
            <a>
              <Image
                src="/IGicon.png" // Update the src path accordingly
                alt="Instagram Icon"
                width={24} // Set appropriate width
                height={24} // Set appropriate height
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-[#71717A] mt-10 text-[#71717A] flex gap-8 justify-start p-10 ">
        <p>Copy right 2024 @ Nomnom LLC</p>
        <p>Privacy policy</p>
        <p>Terms and condition</p>
        <p>Cookie policy</p>
      </div>
    </div>
  );
};
