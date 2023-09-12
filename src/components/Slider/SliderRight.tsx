import { rightSlider } from "@/data/slider";
import { sliderType } from "@/interfaces/slider";
import Link from "next/link";
import React from "react";
import { ImageCommon } from "..";

export default function SliderRight() {
  return (
    <div className="inline-flex flex-col w-full">
      {" "}
      {rightSlider.map((item: sliderType) => (
        <Link href={""} className="block h-[117.3333px] mb-4 last-of-type:mb-0 rounded overflow-hidden">
            <ImageCommon src={item.image} className="object-cover"/>
        </Link>
      ))}
    </div>
  );
}
