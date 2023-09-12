"use client";
import Head from "next/head";
import React, { Dispatch } from "react";
import { products } from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { Button, Col, Row } from "antd";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { addAProduct } from "@/configs/redux/actions";

export default function Page({ params }: { params: { slug: string } }) {
  const counter = useSelector((state) => state);
  console.log(counter);
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <>
      <title>{products[0].name}</title>
      <Breadcrumb />
      <div className="h-screen mt-[30px]">
        Trang sản phẩm : {params.slug}
        <Row>
          <Col span={12}>Đây là slider và các thông tin liên quan</Col>
          <Col span={12} className="inline-flex flex-col">
            <Button type="primary" onClick={() => dispatch(addAProduct({
              id: "dhfgadfgakhjda",
              name: "Iphone 12 promax"
            }))}>
              Mua hàng
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
