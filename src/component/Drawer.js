//========================================= NEW DRAWER ===============================================

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ItemsShowInCartMenu } from "./ItemsShowInCartMenu";
import { Button } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight({  }) {
  // console.log("itemadads", cartItems);
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const cartItems = useSelector((state) => state.cartItem.count)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  const itemsFinal = (item) => {
    // console.log("Items Final Clicked", item);
    navigate("/final-selection-of-items");
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ display: "flex", position: "relative" }}>
        <CssBaseline />
        {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <ShoppingCartIcon />
        </IconButton>

        <Drawer
          sx={{
            width: 20,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
          // onClose={(_, reason) =>
          //   reason === "backdropClick" && console.log("close")
          // }
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <Typography variant="h6">Shop Trolley</Typography>
          </DrawerHeader>

          <Divider />

          <Divider />
          <Typography> {Object.keys(cartItems)?.length} Items in Your cart</Typography>
          {/* {cartItems?.map((selectedItems) => {
            return (
              <ItemsShowInCartMenu
                items={selectedItems}
                deleteToCart={() => deleteToCart(selectedItems)}
              />
            );
          })} */}
          <Button
            size="sm"
            variant="contained"
            color="success"
            onClick={itemsFinal}
          >
            SHOW ALL PRODUCTS
          </Button>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
}
