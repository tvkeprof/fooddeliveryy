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
            src="/LogoNomNom.png" // Note the leading slash
            alt="NomNom Logo"
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
      <div className="relative w-full h-[570px]">
        <Image
          src="/BG.png"
          alt="Background image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
};
