"use client";
import React from "react";
import { SliderWrapper, SliderWrapperProduct } from "../Slider/styled";
import { filType } from "@/interfaces/menu";
import { productDetail } from "@/interfaces/products";
import { Button, Col, Row } from "antd";
import { useRouter } from "next/navigation";
import { SlickArrowLeft, SlickArrowRight } from "../Slick/SlickComponent";
import Slider from "react-slick";
import ProductCard from "../ProductCard";
interface productSliderProps {
  title: string;
  filter?: filType[];
  link: string;
  products?: productDetail[];
}

export default function ProductSlider({
  title,
  filter,
  link,
  products,
}: productSliderProps) {
  const router = useRouter();

  const settings = {
    className: "slider-init plan-list",
    slidesToShow: products && products?.length >= 20 ? 10 : 5,
    rows: products && products?.length >= 20 ? 2 : 1,
    centerPadding: "60px",
    speed: 500,
    slidesPerRow: 2,
    centerMode: false,
    slidesToScroll: 4,
    infinite: false,
    slide: "li",
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div>
      <Row className="items-center justify-between">
        <Col>
          <h2 className="text-[#444]">{title}</h2>
        </Col>
        <Col className="">
          <Row gutter={6}>
            {!products ||
              (filter &&
                filter?.length > 0 &&
                filter.map((fil: filType, index: number) => (
                  <Col>
                    <Button type="default" href={fil.link}>
                      {fil.label}
                    </Button>
                  </Col>
                )))}
            <Col>
              <Button type="default" href={link}>
                Xem tất cả
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {products && products.length > 0 && (
        <SliderWrapperProduct>
          <Slider {...settings}>
            {products.map((product: productDetail, index: number) => (
              <ProductCard data={product} />
            ))}
          </Slider>
        </SliderWrapperProduct>
      )}
    </div>
  );
}
