import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

export const ItemsShowInCartMenu = ({ items, deleteToCart }) => {
  // console.log("data", items);
  return (
    <>
      <Stack
        // direction="row"
        direction={{ xs: "column", sm: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Card
          sx={{ maxWidth: 700, border: "2px solid black", display: "flex" }}
        >
          <CardContent>
            <DeleteIcon onClick={deleteToCart} />
            <CardMedia
              component="img"
              sx={{ height: 50, mt: 1, objectFit: "contain" }}
              image={items?.img}
            />
            <Typography>{items?.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {items?.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {items?.price}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};
