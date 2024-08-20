// Filename - component/contact.js

import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "./CardComponent";

function FavouriteItems({ cart, addToCart, deleteToCart }) {
  const products = useSelector((state) => state.likedProducts.likedProducts);
  console.log("#$$$##$$####$$", products);
  return (
    <>
      <Typography variant="h5">This is favouritn item page</Typography>
      <Stack spacing={2} direction='row' useFlexGap flexWrap="wrap">
      {products?.map((items) => (
        <CardComponent
          data={items}
          cart={cart}
          addToCart={() => addToCart(items)}
          deleteToCart={() => deleteToCart(items)}
          id={items.id}
        />
      ))}
      </Stack>
      
    </>
  );
}

export default FavouriteItems;
