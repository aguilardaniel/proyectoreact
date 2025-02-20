import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Layout } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';

const DOMElement = document.getElementById("root"); 
const VDOMElement = createRoot(DOMElement);

VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
