import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Second from './second';
import Timer from './useEffect';
import reportWebVitals from './reportWebVitals';
import Button from './button';
import Component1   from './component1';
import Component2   from './component2';
import Login from './Login';
import Logo from './logo';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function buttonAction(x)
// {
//     console.log(x);
//    // return setState("srujan");
// }
root.render(
  <React.StrictMode>
    {/* {/* <App />
    <Second buttonActions={buttonAction} />
    <Timer/> */}
    {/* <Button/> */}
    {/* <Component1 />    
    <Component2 />      */}
    {/* <App /> */}
    <Logo />
    <Login />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
