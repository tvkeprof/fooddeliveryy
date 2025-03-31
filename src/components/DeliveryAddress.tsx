import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { addAddress } from "@/utils/axios";
import { useUser } from "./AuthProvider/UserProvider";
import { json } from "stream/consumers";

export const DeliveryAddress = () => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  const { id } = useUser();

  const adddddres = JSON.parse(address);

  console.log(adddddres);

  const handleDeliverButton = async () => {
    if (address) {
      const result = await addAddress(id, address);
      return result?.data;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex border rounded-2xl bg-white h-[36px] px-3 items-center gap-2">
          <img src="LocationIcon.png" className="w-[20px] h-[20px]" />
          <p className="text-[#71717A]">{address ? address : "Add location"}</p>
          <ChevronRight className="w-[20px] h-[20px] text-[#71717A]" />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delivery Address</DialogTitle>
        </DialogHeader>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className="border rounded p-2 w-full mt-2"
        />
        <button
          onClick={handleDeliverButton}
          className="mt-4 bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800"
        >
          Deliver Here
        </button>
      </DialogContent>
    </Dialog>
  );
};
