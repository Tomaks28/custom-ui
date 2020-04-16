import React from "react";
import { Button, NavBar } from "./custom-ui";
import "./custom-ui/index.css";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      {/* <NavBar sideDrawerContent={<Button />} /> */}
      <NavBar
        sideDrawerContent={
          <div
            style={{
              color: "white",
              flex: 1,
              display: "flex",
              background: "black",
              flexDirection: "column",
            }}
          >
            hello
          </div>
        }
      />
      <p>Le code suivant dans la page</p>
    </div>
  );
}

export default App;
