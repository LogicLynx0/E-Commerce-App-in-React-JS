import { Box, ImageList, Stack } from "@mui/material";
import CardComponent from "./CardComponent";
import Navbar from "./Navbar";
import LikeButton from "./LikeButton";
import Counter from "../Hooks/Counter";
import ListComponent from "./ListComponent";
//import './App.css';
import { useState } from "react";
import TitlebarBelowImageList from "../ImageList";
import Tut1 from "../MuiPractice/Tut1";
import IncNum from "../Hooks/IncNum";
import Drawer from "./Drawer";
import DrawerItems from "./DrawerItems";

// const [selectedCategory, setSelectedCategory] = useState(null);
// const categories = ['Laptop', 'Laptop Bags', 'Accessories', 'Cell Phone';
// const filteredProduccts = selectedCategory ?dummyData.filter(product => product.category === selectedCategory): dummyData;

// ]

export const dummyData = [
  {
    id: 1,
    img: "/img/hpLaptop.jpeg",
    title: "Hp Laptop 640 G2",
    description: "Core i5 6th Gen, DDR-4 RAM = 8GB, 128 GB SSD",
    price: "Rs. 5000",
    category: "Laptop",
    brand: "",
  },
  {
    id: 2,
    img: "/img/hpLaptop.jpeg",
    title: "Lenovo Latitude 570",
    description: "Core i7 6th Gen, DDR-4 RAM = 8GB, 250 SSD",
    category: "Laptop",
    price: "Rs. 30000",
  },
  {
    id: 3,
    img: "/img/hpLaptop.jpeg",
    title: "MacBook M2 Pro",
    description: "M2 Pro Chip, 10 Cores, 16 GB RAM, 512 SSD",
    category: "Laptop",
    price: "Rs. 70000",
  },
  {
    id: 4,
    img: "/img/hpLaptop.jpeg",
    title: "DELL Latitte 350",
    description: "8 GB RAM, 500 GB HDD",
    category: "Laptop",
    price: "Rs. 100000",
  },
  {
    id: 5,
    img: "/img/hpLaptop.jpeg",
    title: "Acer 970 AMD",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop",
    price: "Rs. 25000",
  },
  {
    id: 6,
    img: "/img/bag1.jpg",
    title: "Laptop Bag",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop Bags",
    price: "Rs. 45000",
  },
  {
    id: 7,
    img: "/img/bag2.jpg",
    title: "Laptop Bag",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop Bags",
    price: "Rs. 5000",
  },
  {
    id: 8,
    img: "/img/bag3.jpeg",
    title: "Single Pocket Laptop Bag",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Laptop Bags",
    price: "Rs. 3000",
  },
  {
    id: 9,
    img: "/img/acces1.jpg",
    title: "Laptop Accessories",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: "Rs. 2000",
  },
  {
    id: 10,
    img: "/img/bag4.jpeg",
    title: "Acer 970 AMD",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: "Rs. 4000",
  },
  {
    id: 11,
    img: "/img/acces2.png",
    title: "Laptop Accessories",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: "Rs. 6000",
  },
  {
    id: 12,
    img: "/img/acces3.jpg",
    title: "1 to many Ports USB",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Accessories",
    price: "Rs. 10000",
  },
  {
    id: 13,
    img: "/img/mobile.jpg",
    title: "iPhone 13",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Cell Phone",
    price: "Rs. 150000",
  },
  {
    id: 14,
    img: "/img/mobile.jpg",
    title: "iPhone 13 pro",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Cell Phone",
    price: "Rs. 240000",
  },
  {
    id: 15,
    img: "/img/mobile.jpg",
    title: "iPhone 13 pro max",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Cell Phone",
    price: "Rs. 300000",
  },
  {
    id: 16,
    img: "/img/computer1.jpg",
    title: "Core i5",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Computer",
    price: "Rs. 17000",
  },
  {
    id: 17,
    img: "/img/computer2.jpg",
    title: "Custumize PC",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Computer",
    price: "Rs. 25000",
  },
  {
    id: 18,
    img: "/img/computer3.jpg",
    title: "PC LED",
    description: "AMD, 8GB RAM, 128 GB SSD, Nvidia 2GB",
    category: "Computer",
    price: "Rs. 300000",
  },
];

function Home({
  counter,
  setCartItems,
  cartItems,
  cart,
  setCart,
  handleAddToCart,
  handleDeleteToCart,
  toggleDrawerOpen,
  dataInCartIcon,
}) {
  const [productList, setProductList] = useState(dummyData);
  const [clicked, setClicked] = useState();

  const categoryWise = (category) => {
    setClicked = category;
    // console.log("categoryyyy", category);
    if (category === "All Products") {
      // console.log("conditiond true");
      setProductList(dummyData);
    } else {
      const filterArray = dummyData.filter(
        (item) => item.category === category
      );
      // cons/ole.log("filterd products", filterArray);
      setProductList(filterArray);
    }
  };

  return (
    <>
      <Navbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        dataInCartIcon={dataInCartIcon}
        toggleDrawer={toggleDrawerOpen}
        deleteToCart={handleDeleteToCart}
      />
      <Stack direction="column">
        <ListComponent categoryWise={categoryWise} />
      </Stack>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* dummyData.map */}
        {/* filteredProduccts */}
        {productList.map((item) => {
          return (
            <CardComponent
              data={item}
              addToCart={() => handleAddToCart(item)}
              cart={cart}
              counter={counter}
              deleteToCart={() => handleDeleteToCart(item)}
            />
          );
        })}
      </div>

      {/* <DrawerItems /> */}
      {/* <Drawer /> */}
    </>
  );
}
export default Home;
