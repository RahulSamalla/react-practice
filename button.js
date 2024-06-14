import { useState,useEffect } from "react";
function Button() {
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(0);
    function add()
    {
        setCount( count +1);
        console.log(count);
        
        
    }
    // setNext(next+1);
    function sub()
    {
        setCount( ()=>count -1);
    }
  
    useEffect(() => {
        setNext(next+1);
     console.log("count is",count);
     console.log("next is",next);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>next: {next}</p>
        <p>Count: {count}</p>
        <button onClick={add}>+</button><br/>
        {/* <button onClick={sub}>-</button><br/> */}
        
      </>
    );
  }
  export default Button;