import { ImageCommon, MenuApp } from "@/components";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import SliderMain from "@/components/Slider/SliderMain";
import SliderRight from "@/components/Slider/SliderRight";
import { products } from "@/data/products";
import { filType } from "@/interfaces/menu";
import { productDetail } from "@/interfaces/products";
import { Button, Col, Row } from "antd";
import Image from "next/image";


const filter: filType[] = [
  {
    label: "Apple",
    link: "category/dien-thoai?brand=Apple",
    value: "Apple",
    image: ""
  }
]

export default function Home() {
  return (
    <div className="h-[200vh] bg-red">
      <Row className="items-start justify-between relative flex-nowrap" gutter={8}>
        <MenuApp />
        <Col className="w-[712px]"><SliderMain/></Col>
        <Col className="flex-1"><SliderRight/></Col>
      </Row>
      <div className="w-full !h-[75px] my-4 rounded-lg overflow-hidden">
          <ImageCommon src={""} className="object-cover"/>
      </div>
      <ProductSlider title="ĐIỆN THOẠI NỔI BẬT NHẤT" link="/category/dien-thoai" products={products} filter={filter}/>
    </div>
  );
}
