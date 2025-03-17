import { ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-auto flex flex-col">
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

        <div className="bg-[#404040] w-full h-screen">
          <p>Categories</p>
        </div>

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
      </div>
    </div>
  );
};
export default HomePage;
