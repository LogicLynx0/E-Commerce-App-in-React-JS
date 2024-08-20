import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/features/counter/counterSlice";

const AddToCartBtn = ({ addToCart, cart, id, showCartBtn, data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.cart);
  const handleClick = () => {
    addToCart();
    dispatch(increment(id));
    // console.log("kiya aa raha hy", id);
  };
  return (
    <Button
      showCartBtn={showCartBtn}
      variant="contained"
      onClick={handleClick}
      disabled={!!cartItems?.[id]}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
