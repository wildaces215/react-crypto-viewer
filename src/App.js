import React from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = new createMuiTheme({
  palette: {
    primary: { main: "#202040" },
    secondary: { main: "#202060" }
  },
  table: {
    backgroundColor: "#dfdfbf"
  }
});

//https://colorhunt.co/palette/156620
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div
          className="App"
          style={{ backgroundColor: "#282850", height: "100vh" }}
        >
          <Navbar />
          <Route path="/" component={Home}></Route>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
