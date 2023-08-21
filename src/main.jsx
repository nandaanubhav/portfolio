import React from 'react';
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import '@/styles/App.scss';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<StrictMode><App /></StrictMode>);
