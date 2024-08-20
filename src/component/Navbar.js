import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Drawar from "./Drawer";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useLocation, useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import PersistentDrawerRight from "./Drawer";
import Button from "@mui/material/Button";
import { likedProducts } from "../store/features/counter/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../store/features/counter/counterSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({
  
  
  setCartItems,
  deleteToCart,
  searchItem,
  setSearchItem,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log('location', {location});
  const hideSearchBarInPaths = ["/final-selection-of-items", `/select-item-detail`];
  const hideSearchBar = hideSearchBarInPaths.some(path => location.pathname.startsWith(path));

  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // console.log("cartItemsNAvbar", cartItems);

  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );
  const cartItems = useSelector((state) => state.cartItem.count);
  //======================= For add to cart icon and show badge ==========================
  // const {id} = useParams()
  // const selectedItem = data.find((item) => {
  //   return itemm.id === Number(id);
  // })

  // ========== favouriteItems function create for Favourite items page ====================

  const favouriteItems = () => {
    // dispatch(counterSlice());
    navigate("/favouriteItems");
  };

  const returnHomeScreen = () => {
    navigate("/");
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleSearch = (event) => {
    // event.target.value;
    setSearchItem(event.target.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // <AddShoppingCartIcon color='red'/>

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={returnHomeScreen}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="white"
              backgroundColor="#637bfe"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              E-Commerce Store
            </Typography>
          </Button>
          {/* ============================== Search Bar ===================== */}
          {!hideSearchBar && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
                value={searchItem}
              />
            </Search>
          )}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* ============================== Shopping Cart Drawer ================================= */}
            {/* Shopping Cart Icon here's */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="show 17 new notifications"
              deleteToCart={deleteToCart}
            >
              <Badge badgeContent={Object.keys(cartItems)?.length} color="error">
                <PersistentDrawerRight
                  // cartItems={cartItems}
                  // setCartItems={setCartItems}
                  // deleteToCart={deleteToCart}
                />
              </Badge>
            </IconButton>
            {/* // ============================ Favourite Icon =====================================          */}
            <IconButton size="large" color="inherit">
              <Badge color="error" badgeContent={likedProducts?.length}>
                <FavoriteIcon onClick={favouriteItems} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="  "
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
