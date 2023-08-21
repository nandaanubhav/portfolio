import React from 'react';
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import '@/styles/App.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<StrictMode><App /></StrictMode>);
