import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const ListComponent = ({ categoryWise }) => {
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
        {categoryList.map((category, index) => {
          return (
            <ListItemButton
              // selected={true}
              onClick={() => categoryWise(category)}
              // sx={{
              //   "&:hover": {
              //     color: "red",
              //     backgroundColor: "White",
              //     ":active": {
              //       backgroundColor: "aqua",
              //     },
              //   },
              // }}
              // onClick={() => console.log("product category", category)}
            >
              <ListItemText>{category}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default ListComponent;
