import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { StatusBar, Text } from "react-native";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
};

export default App;
