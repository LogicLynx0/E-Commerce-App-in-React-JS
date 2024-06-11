import React from "react";
import Home from "./Home";
import CardComponent from "./CardComponent";

const DrawerItems = (item) => {
  return (
    <>
      <CardComponent data={item} />
    </>
  );
};

export default DrawerItems;
