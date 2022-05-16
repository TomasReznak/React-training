import React, {useMemo, useState} from 'react';
import {Box, Button, Paper} from "@mui/material";
import HookHeader from "./UseEffectHookPage";

function UseMemoHookPage() {
  const [submit, setSubmit] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);


  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter -1);
  };

  const memoComponent = useMemo( () => {
    return (
      <div>
        {counter}
      </div>
    );
  }, [submit]);

  return (
    <>
      <HookHeader/>
      <div className="center">
        <h1>UseMemo Hook</h1>
        <hr/>
        <br/>
        <Box>
          <Box mb={2}>
            <Paper>{counter}</Paper>
          </Box>
          <Button variant="contained" onClick={increment}>+</Button>
          <Button variant="contained" onClick={decrement}>-</Button>
        </Box>
        <Box mt={2}>
          <Button variant="contained" onClick={() => setSubmit(!submit)}>Change memo component</Button>
        </Box>
        <Box>
          <br/>
          <h2>
            UseMemo component
          </h2>
          {memoComponent}
        </Box>
      </div>
    </>
  );
}

export default UseMemoHookPage;
