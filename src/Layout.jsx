import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";

import GlobalStyle from "./Style/global";
//Media
import Home from "./Components/Home";
export default class Layout extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </div>
    );
  }
}
