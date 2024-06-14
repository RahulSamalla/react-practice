import './second.css'; 
import {useState} from "react";
function Second(props) {
    const [state,setState]=useState("rahul");
//    props.buttonAction("243");
    function disp()
    {
        props.buttonActions(state);
    }
  
    return (
      <div  class ="second">
        <h1>Hello This is from  second js file</h1>
        <h1>Hey this is for learning for props concept {props.name}</h1>
        <button type="button" onClick={disp}>submit me</button>
        <h1> After clicking the button the value is {state}</h1>
      </div>
    );
  }
  
  export default Second;
