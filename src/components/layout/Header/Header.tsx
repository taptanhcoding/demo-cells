"use client";

import React from "react";
import { Content } from "../styled";
import { Col, Row } from "antd";
import classNames from "classnames";
import { ColorPalette } from "@/constant";
import { mainColor } from "@/constant/mainColor";
import SearchBox from "./components/SearchBox";
import Info from "./components/Info";

export default function Header({ className}: { className?: any}) {
  return (
    <>
      <div className="w-full text-center h-10 p-1">Nội dung nhanh</div>
      <div
        style={{
          background: ColorPalette[mainColor],
        }}
        className={classNames(`sticky top-0 h-16 z-[100]`)}
      >
        <Content className={classNames("text-white h-16", className)}>
          <Row className="items-center h-full justify-between">
            <Col className="h-[52px] w-[160px] bg-white text-red-300">Logo</Col>
            <Col className="h-[38px]">
              <SearchBox />
            </Col>
            <Col className="h-[32px]">
              <Info />
            </Col>
          </Row>
        </Content>
      </div>
    </>
  );
}
