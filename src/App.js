import React from "react";
import { UserProvider } from "./context/userContext";
import CompA from "./context/CompA";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UserProvider value="Kishor">
        <CompA />
      </UserProvider>
    </div>
  );
}
