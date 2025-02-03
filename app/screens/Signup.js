import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <Text style={{ fontSize: 30 }}>Signup Screen</Text>
    </Container>
  );
};

export default Signup;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;
