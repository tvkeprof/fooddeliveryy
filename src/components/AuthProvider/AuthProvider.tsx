"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useJwt } from "react-jwt";

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { decodedToken, isExpired } = useJwt(token || "");

  useEffect(() => {
    if (!token || isExpired) {
      router.push("/signUp");
    } else {
      router.push("/home");
    }
  }, [token, isExpired, router]);

  return <>{children}</>;
};

export default AuthProvider;
