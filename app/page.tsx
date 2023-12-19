"use client";
import Home from "@/components/Home/Home";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  console.log(session);

  return <Home />;
}
