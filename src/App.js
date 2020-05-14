import React from "react";
import { Provider as ProfilesProvider } from "./context/ProfilesContext";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <ProfilesProvider>
      <div className="App">Test</div>
    </ProfilesProvider>
  );
}

export default App;
