import { productDetail } from "@/interfaces/products";
import React from "react";
import { ImageCommon } from "../Image/ImageCommon";
import { useRouter } from "next/navigation";

export default function ProductCard({ data }: { data: productDetail }) {
  const route = useRouter()
  const imageShowCard: string = data.colors.find(
    (colorImage: any) =>
      colorImage.code ==
      data.options
        .find((op: any) => op.showCart)
        ?.colors.find((cl: any) => cl?.showCard).code
  )?.image;
  console.log("data",imageShowCard);

  const infoCard:any = {
    image: "",
    sell_off_price: 0,
    price:0,

  }

  return (
    <div onClick={() => route.push(`/product/${data.link}`)} className="bg-white rounded-lg h-[384px] text-black px-[10px] pt-[10px] pb-[35px] mr-2 shadow-xl">
      <div className="aspect-square flex items-center justify-center"><ImageCommon src={imageShowCard} className="!w-[160px] object-contain"/></div>
        <h3 className="mb-1 h-16 line-clamp-3 block">{data.name}</h3>
        <div>Giá tiền ở đây</div>
        <div>Giá lên đời</div>
        <div>Khuyến mãi áp dụng</div>
        <div>Đánh giá</div>
        <div>Yêu thích</div>
      </div>
  );
}
