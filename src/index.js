import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAZcqeBdW2a48mC-APVse57wHSbKo9Dvmw",
  authDomain: "proyecto-con-reactjs.firebaseapp.com",
  projectId: "proyecto-con-reactjs",
  storageBucket: "proyecto-con-reactjs.appspot.com",
  messagingSenderId: "456454381263",
  appId: "1:456454381263:web:c20ab4938f90457942a1ba"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
