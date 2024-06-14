import { useState,createContext,useContext } from "react";

function Component1()
{
    const [componentValue,setComponent]=useState(49);
    const UserContext = createContext();
    return(
          <UserContext.Provider x={componentValue}>
                <h1>Hello the value is {componentValue} </h1>
          </UserContext.Provider>
    );
}
export default Component1;