"use client";

import { DeliveryAddress } from "./DeliveryAddress";
import { OrderDetail } from "./OrderDetail";
import { ProfileButton } from "./ProfileButton";
import Image from "next/image"; // Import Image from next/image

export const Header = () => {
  return (
    <>
      <div className="w-full h-[70px] bg-[#18181B] flex justify-between px-10">
        <div className="w-[146px] h-[44px]">
          <Image
            src="LogoNomNom.png" // Path to your logo image
            alt="NomNom Logo" // Add a meaningful alt text for accessibility
            width={146}
            height={44}
          />
        </div>
        <div className="flex items-center gap-3">
          <DeliveryAddress />
          <OrderDetail />
          <ProfileButton />
        </div>
      </div>
      <div>
        <Image
          src="BG.png" // Path to your background image
          alt="Background image" // Add a meaningful alt text for accessibility
          width={1920}
          height={570}
          layout="responsive" // Adjusts the layout for better responsiveness
        />
      </div>
    </>
  );
};
