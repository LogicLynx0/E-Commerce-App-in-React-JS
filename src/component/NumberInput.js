import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Stack } from "@mui/material";

function NumberInput({ id, addToCart, cart, deleteToCart }) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        border={1}
        width="60%"
      >
        <Button>
          <RemoveIcon
            onClick={deleteToCart}
            color="default"
            size="small"
            sx={{ border: 1, borderRadius: 1, width: 15 }}
          />
        </Button>
        <input
          type="text"
          value={cart?.[id] || 0}
          //value={cart?.[id] || 0}
          // onChange={onChange}
        />
        <Button>
          <AddIcon
            onClick={addToCart}
            color="default"
            size="small"
            sx={{ border: 1, borderRadius: 1, width: 15 }}
          />
        </Button>
      </Stack>
      <Button
        variant="contained"
        onClick={addToCart}
        disabled={cart?.[id] > 0 === true}
      >
        {" "}
        Add to Cart
      </Button>
    </>
  );
}
export default NumberInput;
