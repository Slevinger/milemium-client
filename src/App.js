import React from "react";
import { Provider as ProfilesProvider } from "./context/ProfilesContext";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <ProfilesProvider>
      <MainScreen />
    </ProfilesProvider>
  );
}

export default App;
