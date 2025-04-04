"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Importing Next.js Image component
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const ProfileButton = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setEmail(parsedUser.email);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/logIn");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button>
          {/* Using next/image instead of img */}
          <Image
            src="/IconButtonProfile.png"
            alt="Profile icon"
            width={36}
            height={36}
          />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-[250px] bg-white shadow-lg rounded-lg p-4">
        <div className="text-center">
          <p className="text-lg font-medium">Logged in as:</p>
          <p className="text-gray-500">{email || "No email found"}</p>
        </div>

        <button
          onClick={handleSignOut}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600"
        >
          Sign Out
        </button>
      </PopoverContent>
    </Popover>
  );
};
