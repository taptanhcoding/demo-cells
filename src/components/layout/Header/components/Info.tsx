import { Col, Row } from "antd";
import React from "react";

export default function Info() {
  return (
    <Row className="bg-white h-full" gutter={4}>
      <Col className="bg-white p-2 text-black">Info1</Col>
      <Col className="bg-white p-2 text-black">Info2</Col>
      <Col className="bg-white p-2 text-black">Info3</Col>
      <Col className="bg-white p-2 text-black">Info4</Col>
    </Row>
  );
}
