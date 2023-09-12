"use client";

import { sliderType } from "@/interfaces/slider";
import { Card, Col, Row } from "antd";
import React, { LegacyRef, ReactNode, useRef, useState,useEffect } from "react";
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "../Slick/SlickComponent";
import { mainSlider } from "@/data/slider";
import { ImageCommon } from "..";
import { SliderWrapper } from "./styled";

const pricingTableDataV1: sliderType[] = [
  {
    title: "slider1",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
  },
  {
    title: "slider1",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "green",
  },
  {
    title: "slider2",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "red",
  },
  {
    title: "slider3",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "purple",
  },
  {
    title: "slider4",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "yellow",
  },
  {
    title: "slider1",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
  },
  {
    title: "slider1",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "green",
  },
  {
    title: "slider2",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "red",
  },
  {
    title: "slider3",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "purple",
  },
  {
    title: "slider4",
    caption: "caption for slider1",
    interest: "Awesome",
    minDeposit: {
      usd: 12,
    },
    maxDeposit: {
      usd: 40,
    },
    bg: "yellow",
  },
];

interface sliderProps {
  double?: boolean;
}


export default function SliderMain({ double = true }: sliderProps) {
  const slidermain = useRef<Slider | null>(null);
  const secondslider = useRef<Slider | null>(null);
  const [mainSliderRef,setMainSliderRef] = useState<any>(null)
  const [secondSliderRef,setSecondSliderRef] = useState<any>(null)
  const settings = {
    className: "slider-init plan-list",
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // ref: slidermain,
    slide: "li",
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const settings2 = {
    ref: secondslider,
    asNavFor: mainSliderRef,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  useEffect(() => {
    if(slidermain?.current) setMainSliderRef(slidermain.current)
    if(secondslider?.current) setSecondSliderRef(secondslider.current) 
  },[])
  return (
    <div className="w-full rounded-md overflow-hidden shadow-sm">
      <SliderWrapper>
        <Slider {...settings} ref={slidermain} asNavFor={secondSliderRef}>
          {mainSlider.map((item: sliderType) => (
            <div key={item?.id} className="h-[312px] bg-gray-500 text-white">
              <ImageCommon src={item.image} className="object-cover" />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
      <div className="w-full">
        <SliderWrapper>
          <Slider
            {...settings2}
          >
            {mainSlider.map((item: sliderType) => (
              <div
                key={item?.id}
                className="!inline-flex items-center justify-center px-3 h-full  bg-white text-gray-500 !h-[72px] text-center"
              >
                {item.title}
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </div>
    </div>
  );
}
