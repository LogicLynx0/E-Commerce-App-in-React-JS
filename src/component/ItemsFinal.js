import React from "react";
import { Divider, Typography } from "@mui/material";
import ItemsShowInFinalStep from "./ItemsShowInFinalStep";

import Stack from "@mui/material/Stack";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";

const ItemsFinal = () => {
  // console.log("Items Aa rahi hy", cartItems);
 const cartItems =  useSelector((state) => state.cartItem.count)
// console.log('howww',itemsFinal);
  return (
    <>
      <Typography variant="h4" backgroundColor="black" color="white">
        {" "}
        Your Selected Products Here
      </Typography>
      <Stack direction="row" spacing={24}>
        <Stack>
          {/* cartItems */}
          {Object.keys(cartItems).map((key, i) => {
            return (
              <ItemsShowInFinalStep
              key={i}
                cartItem={cartItems[key]}
              />
            );
          })}
        </Stack>
        <Stack>
          <OrderSummary />
        </Stack>
      </Stack>
    </>
  );
};

export default ItemsFinal;
