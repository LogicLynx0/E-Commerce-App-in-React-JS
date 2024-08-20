import React from 'react';

import { Stack } from "@mui/material";
import CardComponent from "./CardComponent";
import Navbar from "./Navbar";
import ListComponent from "./ListComponent";
//import './App.css';
import { useState } from "react";
import ImageSlider from './ImageSlider';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../store/features/counter/filterSlice';

export const dummyData = [
  {
    id: 1,
    img: "/img/hpLaptop.jpeg",
    title: "Hp Laptop 640 G2",
    description: "Core i5 6th Gen, DDR-4 RAM = 8GB, 128 GB SSD",
    price: 5000,
    category: "Laptop",
    brand: "HP",
  },
  {
    id: 2,
    img: "/img/hpLaptop.jpeg",
    title: "Lenovo Latitude 570",
    description: "Core i7 6th Gen, DDR-4 RAM = 8GB, 250 SSD",
    category: "Laptop",
    price: 30000,
    brand: "HP",
  },
  {
    id: 3,
    img: "/img/hpLaptop.jpeg",
    title: "MacBook M2 Pro",
    description: "M2 Pro Chip, 10 Cores, 16 GB RAM, 512 SSD",
    category: "Laptop",
    price: 70000,
    brand: "HP",
  },
  {
    id: 4,
    img: "/img/hpLaptop.jpeg",
    title: "DELL Latitte 350",
    description: "8 GB RAM, 500 GB HDD",
    category: "Laptop",
    price: 100000,
    brand: "HP",
  },
  {
    id: 5,
    img: "/img/hpLaptop.jpeg",
    title: "Acer 970 AMD",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop",
    price: 25000,
    brand: "HP",
  },
  {
    id: 6,
    img: "/img/bag1.jpg",
    title: "Laptop Bag",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop Bags",
    price: 45000,
    brand: "DELL",
  },
  {
    id: 7,
    img: "/img/bag2.jpg",
    title: "Laptop Bag",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop Bags",
    price: 5000,
    brand: "AFesar",
  },
  {
    id: 8,
    img: "/img/bag3.jpeg",
    title: "Single Pocket Laptop Bag",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop Bags",
    price: 3000,
    brand: "Apple",
  },
  {
    id: 9,
    img: "/img/acces1.jpg",
    title: "Laptop Accessories",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: 2000,
    brand: "Ascer",
  },
  {
    id: 10,
    img: "/img/bag4.jpeg",
    title: "SUISSEWIN Laptop Bag 2 Pocket",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: 4000,
    brand: "SUISSEWIN",
  },
  {
    id: 11,
    img: "/img/acces2.png",
    title: "Laptop Accessories",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: 6000,
    brand: "APPLE",
  },
  {
    id: 12,
    img: "/img/acces3.jpg",
    title: "1 to many Ports USB",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: 10000,
    brand: "SUMSUNG",
  },
  {
    id: 13,
    img: "/img/mobile.jpg",
    title: "iPhone 13",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Cell Phone",
    price: 150000,
    brand: "APPLE",
  },
  {
    id: 14,
    img: "/img/mobile.jpg",
    title: "iPhone 13 pro",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Cell Phone",
    price: 240000,
    brand: "APPLE",
  },
  {
    id: 15,
    img: "/img/mobile.jpg",
    title: "iPhone 13 pro max",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Cell Phone",
    price: 300000,
    brand: "APPLE",
  },
  {
    id: 16,
    img: "/img/computer1.jpg",
    title: "Core i5",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Computer",
    price: 17000,
    brand: "HP",
  },
  {
    id: 17,
    img: "/img/computer2.jpg",
    title: "Custumize PC",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Computer",
    price: 25000,
    brand: "MSI",
  },
  {
    id: 18,
    img: "/img/computer3.jpg",
    title: "PC LED",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Computer",
    price: 300000,
    brand: "Alienware",
  },
];

function Home({
  counter,
  setCartItems,
  cartItems,
  handleAddToCart,
  handleDeleteToCart,
  toggleDrawerOpen,
  dataInCartIcon,
  searchItem,
  setSearchItem,
}) {
  const [productList, setProductList] = useState(dummyData);
  const selectedCategory = useSelector(state => state.category.filteredCategory);
  
  const dispatch = useDispatch();
  
  const filteredByCategory = selectedCategory === 'All Products' ? productList : productList.filter((product) => product.category === selectedCategory )


  // ====================================== for searching ============================================
  // console.log("dummy Data", { dummyData, productList });
  // const filteredProducts = searchItem
  //   ? productList.filter((product) =>
  //       product.title.toLowerCase().includes(searchItem.toLowerCase())
  //     )
  //   : productList;

  const filteredProducts = searchItem
    ? filteredByCategory.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    : filteredByCategory;

  // ============================== Filtered Products according to List Items =======================

  const categoryWise = (category) => {
    dispatch(setCategory(category))
  };

  return (
    <>
      <Stack direction="row">
        <ListComponent categoryWise={categoryWise} />
        <ImageSlider />
      </Stack>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* dummyData.map */}
        {/* filteredProduccts */}
        {/* {productList.map((item) => { */}
        {filteredProducts.map((item) => {
          return (
            <CardComponent
              data={item}
              addToCart={() => handleAddToCart(item)}
              counter={counter}
              deleteToCart={() => handleDeleteToCart(item)}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
}
export default Home;
