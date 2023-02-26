import React from "react";
import { CartProvider } from "./CartContext";
import Navigation from "./navigation/Navigation";




function App() {
  return (
    <CartProvider>
     <Navigation/>
    </CartProvider>
  );
}



export default App;
