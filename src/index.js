import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1E0PwkDS97JGI5IIhmvcNEVjuh35n7S4",
  authDomain: "gachadealer-6e267.firebaseapp.com",
  projectId: "gachadealer-6e267",
  storageBucket: "gachadealer-6e267.appspot.com",
  messagingSenderId: "754172022507",
  appId: "1:754172022507:web:0a45ffc5e74e05784578ae"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);
