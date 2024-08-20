import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import LikeButton from "./LikeButton";
import { dummyData } from "./Home";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import ShareIcon from "@mui/icons-material/Share";
import NumberInput from "./NumberInput";
import AddToCartBtn from "./AddToCartBtn";
import { useDispatch, useSelector } from "react-redux";
import { likeUnlikeItem } from "../store/features/counter/likedProductsSlice";


export const ItemClickShown = ({ addToCart }) => {
  // console.log("data is shown", data);
  const dispatch = useDispatch();

  const { id } = useParams();
  const selectedItem = dummyData.find(item => item.id === Number(id))
  console.log("selectItem", {selectedItem, id});
  const handleFavouriteClick = () => {
    // dispatch(likeUnlikeItem(data?.id));
    dispatch(likeUnlikeItem(selectedItem));
  }

  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: "80%",
          alignItems: "center",
          // border: "1px solid black",
          mt: "20px",
          ml: "100px",
        }}
      >
        <Grid item>
          <Card
            sx={{
              maxWidth: 400,
              p: 1,
              ml: 6,
              mt: 10,
              border: "2px solid black",
              alignItems: "center",
            }}
          >
            <div>
              <LikeButton onClick={handleFavouriteClick} data={selectedItem}/>
              <ShareIcon />
            </div>
            <CardMedia
              component="img"
              sx={{ height: 200, mt: 1, objectFit: "contain", width: "100%" }}
              image={selectedItem?.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {selectedItem?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedItem?.description}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  font: "15px Arial, sans-serif",
                  fontFamily: "Lucida Console, Courier New",
                }}
              >
                {selectedItem?.price}
              </Typography>
              <Typography color="text.secondary">
                Brand: {selectedItem?.brand}
              </Typography>
            </CardContent>
            <NumberInput
          id={selectedItem?.id}
          // cart={cart}
          //     addToCart={() => addToCart(selectedItem)}
          //     deleteToCart={() => deleteToCart(selectedItem)}
            />
            <AddToCartBtn 
              addToCart={() => addToCart(selectedItem)}
              id={selectedItem?.id}
              showCartBtn={true}
              data={selectedItem}
            />
          </Card>
        </Grid>

        <Grid item>
          <Typography variant="h5">Specifications in Detail</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            justo id sapien finibus dignissim in id diam. Nullam tempus
            fermentum est. Aenean eget pretium nunc. Proin ac tortor ut mauris
            venenatis tristique sagittis vitae massa. Nunc suscipit elit nulla,
            a tristique ipsum lacinia vel. Sed tempor aliquam turpis, vitae
            varius eros convallis vitae. Phasellus dictum velit magna, sed
            rutrum odio varius in. In tempor orci vel egestas tempor. Aliquam
            consectetur erat arcu, eget sagittis ex sagittis at. Vestibulum ut
            elit vel massa gravida interdum et sit amet tellus. Aliquam
            fermentum tortor ex, quis fermentum mauris rutrum sit amet. Duis
            pretium pulvinar nisl, non feugiat enim convallis elementum. Aenean
            nec libero sit amet erat dictum rutrum. Nam a nisi quam. Cras
            laoreet tellus at elit egestas tincidunt facilisis ac nunc.
          </Typography>
          <Typography>
            Phasellus et vestibulum felis, in ornare velit. Curabitur aliquet
            sit amet nisi id aliquam. Sed mollis id magna sit amet eleifend.
            Donec vehicula dignissim volutpat. Maecenas sollicitudin purus
            ultricies diam vestibulum, a posuere sem lacinia. Mauris rhoncus mi
            vitae risus mattis, vitae ultrices lectus congue. In vitae quam
            vitae justo ultricies luctus. Aenean faucibus magna eget lacus
            pharetra, eu vehicula diam placerat. Curabitur sagittis justo eget
            neque lacinia pharetra. Donec sed ipsum ac felis posuere imperdiet.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            justo id sapien finibus dignissim in id diam. Nullam tempus
            fermentum est. Aenean eget pretium nunc. Proin ac tortor ut mauris
            venenatis tristique sagittis vitae massa. Nunc suscipit elit nulla,
            a tristique ipsum lacinia vel. Sed tempor aliquam turpis, vitae
            varius eros convallis vitae. Phasellus dictum velit magna, sed
            rutrum odio varius in. In tempor orci vel egestas tempor. Aliquam
            consectetur erat arcu, eget sagittis ex sagittis at. Vestibulum ut
            elit vel massa gravida interdum et sit amet tellus. Aliquam
            fermentum tortor ex, quis fermentum mauris rutrum sit amet. Duis
            pretium pulvinar nisl, non feugiat enim convallis elementum. Aenean
            nec libero sit amet erat dictum rutrum. Nam a nisi quam. Cras
            laoreet tellus at elit egestas tincidunt facilisis ac nunc.
          </Typography>
          <Typography>
            Phasellus et vestibulum felis, in ornare velit. Curabitur aliquet
            sit amet nisi id aliquam. Sed mollis id magna sit amet eleifend.
            Donec vehicula dignissim volutpat. Maecenas sollicitudin purus
            ultricies diam vestibulum, a posuere sem lacinia. Mauris rhoncus mi
            vitae risus mattis, vitae ultrices lectus congue. In vitae quam
            vitae justo ultricies luctus. Aenean faucibus magna eget lacus
            pharetra, eu vehicula diam placerat. Curabitur sagittis justo eget
            neque lacinia pharetra. Donec sed ipsum ac felis posuere imperdiet.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            ADD TO PROCEED
          </Button>
        </Grid>
      </Stack>
    </>
  );
};
