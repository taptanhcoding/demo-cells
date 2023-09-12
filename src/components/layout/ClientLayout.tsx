'use client'
import React from "react";
import {  Content, Wrapper } from "./styled";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface clientProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: clientProps) {
  return (
    <Wrapper>
      <Header />
      <Content className="py-4">{children}</Content>
      <Footer/>
    </Wrapper>
  );
}
