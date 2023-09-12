"use client";

import { store } from "@/configs/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface globalProps {
  children: React.ReactNode;
}
export default function GlobalLayout({ children }: globalProps) {
  return <Provider store={store}>{children}</Provider>;
}
