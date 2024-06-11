import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//  import Home from "./component/Home";
import AddToCart from "./component/ItemClickShown";
import FavouriteItems from "./component/FavouriteItems";
import "./App.css";
import Home from "./component/Home";
import { ItemsShowInCartMenu } from "./component/ItemsShowInCartMenu";
import CardComponent from "./component/CardComponent";

import { ItemClickShown } from "./component/ItemClickShown";
import { dummyData } from "./component/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState({});
  const [dataInCartIcon, setDataInCartIcon] = useState(false);

  console.log("dummyData", dataInCartIcon);
  //================================================// // ============================
  const handleAddToCart = (item) => {
    // this state managed textfield value of carts & increments 1 by 1
    setCart((previousValue) => ({
      ...previousValue,
      [item?.id]: (previousValue[item?.id] || 0) + 1,
    }));

    // this state managed notification of carts adding on shopping cart icon by id which are placed in navbar
    const newArray = cartItems.find((element) => element?.id === item?.id);
    if (newArray) return;
    console.log("Action worked", newArray);
    setCartItems((pre) => [...pre, item]);
  };

  // ====================================== // // ============================

  const handleDeleteToCart = (item) => {
    if (cart[item.id] > 0) {
      setCart((pre) => ({ ...pre, [item.id]: (pre[item.id] || 0) - 1 }));
    }

    const updateItems = cartItems.filter((data) => data?.id !== item?.id);
    setCartItems(updateItems);
  };
  //====================================== // // ==============================
  const toggleDrawerOpen = () => {
    console.log("icon clicked", selectedCarts);
    setDataInCartIcon(true);
  };
  //======================================== // // ======================================

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCartItems={setCartItems}
                cartItems={cartItems}
                setCart={setCart}
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleDeleteToCart={handleDeleteToCart}
                toggleDrawerOpen={toggleDrawerOpen}
                dataInCartIcon={dataInCartIcon}
              />
            }
          ></Route>

          <Route
            path="/select-item-detail/:id"
            element={
              <ItemClickShown data={dummyData} addToCart={handleAddToCart} />
            }
          ></Route>
          <Route path="/favouriteItems" element={<FavouriteItems />}></Route>
          <Route
            path="/cart-list"
            element={<ItemsShowInCartMenu cartItems={cartItems} />}
          ></Route>
          {/* <Route
            path=''
            element{}></Route> */}
        </Routes>
      </Router>
    </>
  );
}
export default App;
