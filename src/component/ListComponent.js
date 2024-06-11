import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const ListComponent = () => {
  const categoryList = [
    "All Products",
    "Accessories",
    "Laptop Bags",
    "Laptop",
    "Computer",
    "Cell Phone",
  ];
  return (
    <div>
      <List
        sx={{ display: "flex", mt: 1, backgroundColor: "red", color: "black" }}
      >
        {categoryList.map((item, index) => {
          return (
            <ListItemButton>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default ListComponent;
