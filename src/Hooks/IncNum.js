// const Clicked = () => {
//     console.log('Cliked' + count ++);
// }

// let count = 1;

// const IncNum = () => {
//     return(
//         <>
//             <h1>{count}</h1>
//             <button onClick={Clicked}> Clicked</button>
//         </>
//     );
// }

// export default IncNum;

import { Button } from "@mui/material";
import React, { useState } from "react";

export default function IncNum() {
  const [text, setText] = useState("text");

  const clickOnchange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText("yes");
    // console.log('yioiop')
  };

  const arr = [24, 67, 87];
  let a = arr.map((value, index) => {
    // console.log(value, index)
    return value;
  });
  const [showNum, setShowNum] = useState([]);
  const arr2 = [34, 67, 45, 26, 10, 66, 9, 2, 6, 7];

  const showNumber = () => {
    // console.log("$$$$$$showNum",showNum)
    setShowNum(arr2);
  };

  return (
    <div>
      <textarea value={text} onChange={clickOnchange}></textarea>
      <Button variant="contained" color="error" onClick={handleUpClick}>
        Clic me
      </Button>
      <Button variant="contained" color="secondary" onClick={showNumber}>
        Click for Show Number
      </Button>
    </div>
  );
}
