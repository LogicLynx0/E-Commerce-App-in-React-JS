import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

function LikeButton({ onClick, data }) {
  const itemId = data?.id;
  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );
  const isFavourite = likedProducts.find((pr) => pr.id === itemId);
  return (
    <IconButton onClick={onClick}>
      {!!isFavourite ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
}

export default LikeButton;
