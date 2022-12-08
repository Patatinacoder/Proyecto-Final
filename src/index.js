import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import ThemeProvider from "./contexts/Theme";
import CartProvider from "./contexts/Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ThemeProvider>      
        <CartProvider>
        <App />
        </CartProvider>
    </ThemeProvider>
)
