import {useContext} from "react";
import {User, UserContext} from "./UseContextHookPage";

function Component4() {
  const user: User = useContext(UserContext);
  return (
    <>
      <h1>Component 4</h1>
      <br />
      {`Again, my name is ${user.name} ${user.surname}` }
      <hr />
    </>
  );
}

export default Component4;
