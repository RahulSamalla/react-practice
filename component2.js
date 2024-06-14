  
import { useContext,UserContext } from "react";
function Component2()
{
    const user = useContext(UserContext);
    return(
          <>
            <h1>`hello this is from Component2 ${user}` </h1>
            
          </>
    );
}
export default Component2;