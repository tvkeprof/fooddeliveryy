"use client";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#18181B]">
      <div className="w-full h-[90px] mt-[70px] bg-[#EF4444] flex justify-between items-center">
        <p className="text-[#FAFAFA] text-[30px]">Fresh fast delivered</p>
        <p className="text-[#FAFAFA] text-[30px]">Fresh fast delivered</p>
        <p className="text-[#FAFAFA] text-[30px]">Fresh fast delivered</p>
        <p className="text-[#FAFAFA] text-[30px]">Fresh fast delivered</p>
      </div>

      <div className="flex justify-between text-white gap-x-4 mt-[70px] px-10">
        <div>
          <img src="LogoContainColumn.png" />
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
              <img src="fbIcon.png" />
            </a>
            <a>
              <img src="IGicon.png" />
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
