import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import LikeButton from "./LikeButton";
import { dummyData } from "./Home";
import Navbar from "./Navbar";

import ShareIcon from "@mui/icons-material/Share";
import NumberInput from "./NumberInput";

export const ItemClickShown = ({ data, addToCart, cart, deleteToCart }) => {
  console.log("data is shown", data);

  const { id } = useParams();
  const selectedItem = data.find((item) => {
    // console.log("selected", selectedItem)
    return item.id === Number(id);
  });
  console.log("selectItem", selectedItem);

  return (
    <>
      <Navbar />
      <Typography variant="h5" color="primary">
        Specifications of that Item
      </Typography>
      <Card
        sx={{ maxWidth: 700, p: 1, ml: 6, mt: 10, border: "2px solid black" }}
      >
        <div>
          <LikeButton />
          <ShareIcon />
        </div>
        <CardMedia
          component="img"
          sx={{ height: 200, mt: 1, objectFit: "contain", width: "100%" }}
          image={selectedItem?.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedItem?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedItem?.description}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              font: "15px Arial, sans-serif",
              fontFamily: "Lucida Console, Courier New",
            }}
          >
            {selectedItem?.price}
          </Typography>
          <Typography color="text.secondary">
            Brand: {selectedItem?.brand}
          </Typography>
        </CardContent>
        <NumberInput
          id={selectedItem?.id}
          cart={cart}
          addToCart={() => addToCart(selectedItem)}
          deleteToCart={() => deleteToCart(selectedItem)}
        />
      </Card>

      <Button variant="contained" color="primary">
        ADD TO PROCEED
      </Button>
    </>
  );
};
