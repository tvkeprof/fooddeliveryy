"use client";

import { DeliveryAddress } from "./DeliveryAddress";
import { ProfileButton } from "./ProfileButton";

export const Header = () => {
  return (
    <>
      <div className="w-full h-[70px] bg-[#18181B] flex justify-between px-10">
        <div className="w-[146px] h-[44px]">
          <img src="LogoNomNom.png" className="w-[146px] h-[44px]" />
        </div>
        <div className="flex items-center gap-3">
          <DeliveryAddress />
          <button>
            <img src="IconButtonSags.png" className="w-[36px] h-[36px]" />
          </button>
          <ProfileButton />
        </div>
      </div>
      <div>
        <img src="BG.png" className="w-full h-[570px]" />
      </div>
    </>
  );
};
