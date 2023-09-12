import React from "react";
import { Content } from "../styled";
import classNames from "classnames";
import { ColorPalette } from "@/constant";
import { mainColor } from "@/constant/mainColor";
import { Col, Row } from "antd";

export default function Footer() {
  return (
    <div
      style={{
        background: ColorPalette[mainColor],
      }}
      className={classNames(`p-2`)}
    >
      <Content className={classNames("text-white")}>
        <Row className="items-center h-full justify-between" gutter={24}>
          <Col className=" bg-white text-red-300 py-3" span={6}>
            Footer1
          </Col>
          <Col className="bg-white text-red-300 py-3" span={6}>
            Footer2
          </Col>
          <Col className="bg-white text-red-300 py-3" span={6}>
            Footer3
          </Col>
          <Col className="bg-white text-red-300 py-3" span={6}>
            Footer4
          </Col>
        </Row>
        <Row>Tag</Row>
      </Content>
    </div>
  );
}
