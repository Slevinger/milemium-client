import React from "react";
import { Provider as ProfilesProvider } from "./context/ProfilesContext";
import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <ProfilesProvider>
      <MainScreen />
    </ProfilesProvider>
  );
}

export default App;
