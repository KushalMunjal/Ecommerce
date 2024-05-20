import React from "react";
import Layout from "../layout/Layout";
import ProductCard from "../Product_Card/Productcard";
import { Carousel } from "../Caraousal/Caraousal";
import { slides } from "../data/Imagedata.json";
import Category from "../category/Category";
const images = [
  "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
];
const HomePage = () => {
  return (
    <Layout>
      <Carousel data={slides}></Carousel>
      <Category></Category> 
      <ProductCard> </ProductCard>
    </Layout>
  );
};

export default HomePage;
