import React from "react";
import "./home.css";
import { Header } from "../../components/Header";
import { Contact } from "../../components/Contact";
import { ProductList } from "../../components/ProductList";

export const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Contact />
    </>
  );
};
