import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addAddress } from "@/utils/axios";
import { useUser } from "./AuthProvider/UserProvider";
import Image from "next/image";

export const DeliveryAddress = () => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { id } = useUser();

  const handleDeliverButton = async () => {
    if (!address) {
      alert("Please enter a valid address.");
      return;
    }
    try {
      const response = await addAddress(address, id);
      if (response?.data) {
        setShowConfirm(true);
        setOpen(false);
      }
    } catch (error) {
      console.error("Error updating address:", error);
      alert("Failed to update address. Please try again.");
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="flex border rounded-2xl bg-white h-[36px] px-3 items-center gap-2">
            <Image
              src="/LocationIcon.png" // assumes this is in your public/ folder
              alt="Location Icon"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#71717A]">
              {address ? address : "Add location"}
            </p>
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
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Address Updated</DialogTitle>
          </DialogHeader>
          <p>Your delivery address has been updated successfully!</p>
          <button
            onClick={() => setShowConfirm(false)}
            className="mt-4 bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800"
          >
            OK
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};
