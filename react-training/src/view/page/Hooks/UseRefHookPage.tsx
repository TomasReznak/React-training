import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Box, Button} from "@mui/material";
import HookHeader from "./UseEffectHookPage";

function UseRefHookPage() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <HookHeader/>
      <div className="center">
        <h1>useRef Hook</h1>
        <hr/>
        <h3>Render Count: {count.current}</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default UseRefHookPage;
