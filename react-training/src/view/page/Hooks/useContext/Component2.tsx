import Component3 from "./Component3";
import {useContext} from "react";
import {User, UserContext} from "./UseContextHookPage";

function Component2() {
  const user: User = useContext(UserContext);

  return (
    <>
      <h1>Component 2</h1>
      <br />
      {`Again, my name is ${user.name} ${user.surname}` }
      <hr />
      <Component3 />
    </>
  );
}

export default Component2;
