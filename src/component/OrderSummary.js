import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useDispatch, useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cartItem.count)
  // console.log("🚀 ~ OrderSummary ~ cartItems:", cartItems)
  
  const result = Object.values(cartItems);
  const sum = result.reduce((pre, item, index) => pre + item.count, 0)

  const totalP = result.reduce((pre, item, index) => pre + item.count * item.price, 0)
  
  const shipmentCharges = 2000;

  const tax = 5

  const taxCal = (totalP + shipmentCharges) * 0.05

  const totalPricePay = totalP + shipmentCharges + taxCal
  
  console.log(sum);

  return (
    <div>
      <Stack
        spacing={2}

        sx={{
          mt: 4,
          // backgroundColor: "rgb(255,230,76)",
          width: 400,
          border: "2px solid black",
         
        }}
      >
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            variant="h5"
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
              
            }}
          >
            Order Summary <CalculateIcon />
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
            }}
          >
            Types of Items: {Object.keys(cartItems)?.length}
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
            }}
          >
            Total Number of Pices: {sum}
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
            }}
          >
            All Items Price: {totalP}
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
            }}
          >
            Shipment Charges: {shipmentCharges}
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
            }}
          >
            Tax%:{tax}
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Typography
            color="white"
            sx={{
              backgroundColor: "#b26a00",
              border: "1px solid black",
              fontWeight: "bold",
            }}
          >
            Total Price You Pay: {totalPricePay}
          </Typography>
        </Item>
        <Item sx={{ border: "1px solid black" }}>
          <Button variant="contained" color="success">
            PROCEED, Are You Sure
          </Button>
        </Item>
      </Stack>
    </div>
  );
};

export default OrderSummary;
