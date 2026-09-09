"use client";

import { ReactNode } from "react";
import { useLenis } from "@/shared/hooks/useLenis";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
