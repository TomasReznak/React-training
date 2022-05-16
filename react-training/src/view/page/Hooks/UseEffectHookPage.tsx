import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import HookHeader from "../../components/HookHeader";

function UseEffectHookPage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect( () => {
    console.log('action each time components render');
  });

  useEffect( () => {
    console.log('action on component init');
  }, []);

  useEffect( () => () =>  {
    console.log('action only on submit');
  }, [submit]);

  useLayoutEffect( () => {
    console.log('before layout render');
  });

  return (
    <>
      <HookHeader />
      <div className="center">
        <h1>useEffect Hook</h1>
        <hr/>
        <input value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
        <br />
        <Button variant={'contained'} onClick={() => setSubmit(true)}>Submit</Button>
      </div>
    </>
  );
}

export default UseEffectHookPage;
