import React, { useState, useEffect } from "react";
import "./App.css";
import { ProductDisplay } from "./components/ProductDisplay";
import { Message } from "./components/Message";


export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage(" ✅ Yay! Order placed! 🛒 You will receive an email confirmation confirming your order.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- please try again."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
