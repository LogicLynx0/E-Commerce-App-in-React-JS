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
import Counter from "./store/features/counter/Counter";
import ItemsFinal from "./component/ItemsFinal";
import Navbar from "./component/Navbar";
import { useSelector } from "react-redux";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [dataInCartIcon, setDataInCartIcon] = useState(false);
  const [searchItem, setSearchItem] = useState("Lenovo Latitude 570");
  // console.log(searchItem);

  // console.log("cartcartcart", searchItem);

  // const searchFilter = searchItem.filter((fltrProduct) => {});
  //================================================// // ============================
  const handleAddToCart = (item) => {
    // this state managed textfield value of carts & increments 1 by 1

    // this state managed notification of carts adding on shopping cart icon by id which are placed in navbar
    const newArray = cartItems.find((element) => element?.id === item?.id);
    if (newArray) return;
    // console.log("Action worked", newArray);
    setCartItems((pre) => [...pre, item]);
  };

  // ====================================== // // ============================

  const handleDeleteToCart = (item) => {
    console.log("items568679", item);
    // if (cart[item.id] > 0) {
    //   setCart((pre) => ({ ...pre, [item.id]: (pre[item.id] || 0) - 1 }));
    // }
    // // else if (cart[item.id] === 0) {
    // //   setCart();
    // // }

    const updateItems = cartItems.filter((data) => data?.id !== item?.id);
    setCartItems(updateItems);
  };
  //====================================== // // ==============================
  const toggleDrawerOpen = () => {
    // console.log("icon clicked", selectedCarts);
    setDataInCartIcon(true);
  };
  //======================================== // // ======================================
  const isLiked = useSelector((state) => state.likeProducts);

  return (
    <>
      <Router>
        <Navbar
          cartItems={cartItems}
          setCartItems={setCartItems}
          dataInCartIcon={dataInCartIcon}
          toggleDrawer={toggleDrawerOpen}
          deleteToCart={handleDeleteToCart}
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCartItems={setCartItems}
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleDeleteToCart={handleDeleteToCart}
                toggleDrawerOpen={toggleDrawerOpen}
                dataInCartIcon={dataInCartIcon}
                searchItem={searchItem}
                setSearchItem={setSearchItem}
              />
            }
          ></Route>

          <Route
            path="/select-item-detail/:id"
            element={
              <ItemClickShown
                addToCart={handleAddToCart}
                deleteToCart={handleDeleteToCart}
                
              />
            }
          ></Route>
          <Route
            path="/final-selection-of-items"
            element={
              <ItemsFinal
                data={dummyData}
                cartItems={cartItems}
                setCartItems={setCartItems}
                addToCart={handleAddToCart}
                deleteToCart={handleDeleteToCart}
              />
            }
          ></Route>

          <Route
            path="/favouriteItems"
            element={
              <FavouriteItems
                data={dummyData}
                cartItems={cartItems}
                addToCart={handleAddToCart}
                deleteToCart={handleDeleteToCart}
              />
            }
          ></Route>
          {/* <Route
            path="/cart-list"
            element={
              <ItemsShowInCartMenu
                cartItems={cartItems}
                deleteToCart={handleDeleteToCart}
              />
            }
          ></Route> */}
          {/* <Route
            path=''
            element{}></Route> */}
        </Routes>
      </Router>
      {/* <Counter /> */}
    </>
  );
}
export default App;
