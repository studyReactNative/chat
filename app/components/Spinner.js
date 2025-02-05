import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import styled, { ThemeContext } from "styled-components";

const Spinner = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ActivityIndicator size={"large"} color={theme.spinnerIndicator} />
    </Container>
  );
};

export default Spinner;

const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  justify-content: center;
  opacity: 0.3;
  background-color: ${({ theme }) => theme.spinnerBackground};
`;
