import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "../src/components/Login";
import CreateProfile from "../src/components/create-profile/CreateProfile";
function App() {
  return (
    <div className="App">
      <CreateProfile></CreateProfile>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
