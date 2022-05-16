import { useState, createContext } from "react";
import {TextField} from "@mui/material";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component4 from "./Component4";
import HookHeader from "../UseEffectHookPage";
import React from "react";

export const UserContext = createContext({});

export interface User {
  name?: string,
  surname?: string;
}

function UseEffectHookPage() {
  const [user, setUser] = useState<User>({
    name: 'Peter',
    surname: 'Testovaci'
  });

  return (
    <>
      <HookHeader />
      <UserContext.Provider value={user}>
        <div className={'center'}>
          <h1>{`Hello ${user.name} ${user.surname}!`}</h1>
          <br />
          <TextField label="Name" onChange={(e) => setUser({...user, name: e.target.value})} />
          <TextField label="Surname" onChange={(e) => setUser({...user, surname: e.target.value})} />
          <br />
          <hr />
          <Component1/>
          <Component2/>
        </div>
      </UserContext.Provider>
      <Component4/>
    </>
  );
}

export default UseEffectHookPage;
