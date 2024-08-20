import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NumberInput from "./NumberInput";
import LikeButton from "./LikeButton";
import { CardActionArea, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import {
  likeProduct,
  unlikeProduct,
} from "../store/features/counter/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { likeUnlikeItem } from "../store/features/counter/likedProductsSlice";

const CardComponent = ({
  data,
  inputValue,
  onChange,
  addToCart,
  increment,
  decrement,
  counter,
  deleteToCart,
  product,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("778947892344898", data)
  const [input, setInput] = useState("");
  // export default function MediaCard() {
  const handleChange = (event) => {
    // console.log(event);
  };

  const itemDetails = (id) => {
    // console.log("Item Details", id);

    navigate(`/select-item-detail/${id}`);
  };

  // const isLiked = likedProducts.includes(product?.id);
  const handleFavouriteClick = () => {
    // dispatch(likeUnlikeItem(data?.id));
    dispatch(likeUnlikeItem(data));
   
  };
  return (
    <Card sx={{ maxWidth: 345, p: 1, width: "100%", ml: 6, mt: 10 }}>
      <LikeButton onClick={handleFavouriteClick} data={data} />
      <CardActionArea>
        <CardMedia
          onClick={() => itemDetails(data?.id)}
          component="img"
          sx={{ height: 160, mt: 3, objectFit: "contain" }}
          image={data?.img}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Rs. {data?.price}
        </Typography>
      </CardContent>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <NumberInput
          id={data?.id}
          // inputValue={inputValue}
          // addToCart={addToCart}
          // counter={counter}
          // deleteToCart={deleteToCart}
        />
        <AddToCartBtn
          addToCart={() => addToCart(data)}
          id={data?.id}
          showCartBtn={true}
          data={data}
        />
      </Stack>
    </Card>
  );
};
export default CardComponent;
