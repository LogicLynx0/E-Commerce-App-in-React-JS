import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/features/counter/counterSlice";
import { useLocation } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";

function NumberInput({ cart, id }) {
  const selectedItem = useSelector((state) => state.cartItem.count);
  // console.log("selected Item", selectedItem);

  const dispatch = useDispatch();

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={0}
        border={1}
        sx={{ border: "1px solid red" }}
      >
        {selectedItem?.[id] ? (
          <>
            <Button onClick={() => dispatch(decrement(id))}>
              <RemoveIcon
                // onClick={deleteToCart}

                color="default"
                fontSize="12px"
                sx={{ border: 1, borderRadius: 1 }}
              />
            </Button>

            <input
              type="text"
              value={selectedItem[id]?.count || 0}

              // value={cart?.[id] || 0}
              //value={cart?.[id] || 0}
              // onChange={onChange}
            />
            <Button onClick={() => dispatch(increment(id))}>
              <AddIcon
                // onClick={addToCart}

                color="default"
                fontSize="small"
                sx={{ border: 1, borderRadius: 1, width: 15 }}
              />
            </Button>
          </>
        ) : null}
      </Stack>
    </>
  );
}
export default NumberInput;
