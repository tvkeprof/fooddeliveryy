"use client";

import { ChevronRight } from "lucide-react";

export const Header = () => {
  return (
    <>
      <div className="w-full h-[70px] bg-[#18181B] flex justify-between px-10">
        <div className="w-[146px] h-[44px]">
          <img src="LogoNomNom.png" className="w-[146px] h-[44px]" />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex border rounded-2xl bg-white h-[36px] items-center">
            <img src="LocationIcon.png" className="w-[20px] h-[20px]" />
            <p className="text-[#EF4444]">Delivery address:</p>
            <p className="text-[#71717A]">Add location</p>
            <ChevronRight className="w-[20px] h-[20px] text-[#71717A]" />
          </button>
          <button>
            <img src="IconButtonSags.png" className="w-[36px] h-[36px]" />
          </button>
          <button>
            <img src="IconButtonProfile.png" className="w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
      <div>
        <img src="BG.png" className="w-full h-[570px]" />
      </div>
    </>
  );
};
