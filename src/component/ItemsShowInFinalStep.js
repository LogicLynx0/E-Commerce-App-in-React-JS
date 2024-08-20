import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteItem } from "../store/features/counter/counterSlice";
import NumberInput from "./NumberInput";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid({
  cartItem
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(cartItem?.id));
  };



  return (
    <Paper
      elevation="10"
      sx={{
        p: 2,
        margin: "10px",
        maxWidth: 600,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={8}>
        <Grid item>
          <DeleteIcon fontSize="small" onClick={handleDelete} />
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={cartItem?.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} spacing={9} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {cartItem?.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {cartItem?.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brand: {cartItem?.brand}
              </Typography>
            </Grid>
            
            {/* ============================================================================================ */}
            <Grid item>
              <NumberInput id={cartItem.id}  />
              {/* addToCart={addToCart} cart={cart} */}
            </Grid>
            {/* // ======================================================================================== */}
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            justifyContent={"space-between"}
          >
            <Grid item>
              <Typography variant="subtitle1" component="div">
                / Price: {cartItem?.price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  backgroundColor: "red",
                  borderRadius: "4px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {/* */}
                Total Price: {cartItem?.price * cartItem.count}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
