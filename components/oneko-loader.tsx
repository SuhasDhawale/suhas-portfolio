// components/OnekoLoader.tsx
"use client";
import { useEffect } from "react";
import { injectOneko } from "@/scripts/oneko";

export default function OnekoLoader() {
  useEffect(() => {
    injectOneko();
  }, []);
  return null;
}
