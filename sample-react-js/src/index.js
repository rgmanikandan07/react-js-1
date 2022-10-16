import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// document.getElementById('root').innerHTML = "Hello";

const a = React.createElement("div",{},

React.createElement("h1",{},"Hiii"),
React.createElement("h2",{},"Hii"),
React.createElement("h3",{},"Hi")
);

console.log("a",a);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(a);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
