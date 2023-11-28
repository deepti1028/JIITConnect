import React from "react";
import Header from "../components/Annapurna/Header";
import "../index.css";
import { Provider } from "react-redux";
import { store } from "../components/Annapurna/Store.jsx";
import Filter from "../components/Annapurna/Filter.jsx";
import ProductCard from "../components/Annapurna/ProductCard";

const Annapurna = () => {
  return (
    <>
      <Filter />
      <ProductCard />
    </>
  );
};

export default Annapurna;
