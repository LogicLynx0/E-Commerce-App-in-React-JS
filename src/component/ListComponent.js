import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const ListComponent = ({ categoryWise, clicked }) => {
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
              selected={category === clicked}
              onClick={() => categoryWise(category)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "pink",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "parrot",
                    color: "white",
                  },
                },
              }}
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
