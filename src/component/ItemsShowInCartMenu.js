import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";
import DeleteIcon from "@mui/icons-material/Delete";

export const ItemsShowInCartMenu = ({ items }) => {
  console.log("data", items);
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Card
          sx={{ maxWidth: 700, border: "2px solid black", display: "flex" }}
        >
          <CardContent>
            <DeleteIcon />
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
