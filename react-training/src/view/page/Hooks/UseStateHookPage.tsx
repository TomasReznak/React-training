import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import HookHeader from "./UseEffectHookPage";

function UseStateHookPage() {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter -1);
  };

  return (
    <>
      <HookHeader/>
      <div className="center">
        <h1>UseState Hook</h1>
        <hr/>
        <br/>
        <Box>
          {counter}
          <Button variant="contained" onClick={increment}>+</Button>
          <Button variant="contained" onClick={decrement}>-</Button>
        </Box>
      </div>
    </>
  );
}

export default UseStateHookPage;
