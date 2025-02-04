import React from "react";
import { Button, Text } from "react-native";
import styled from "styled-components";
import { Image } from "../components";

const Login = ({ navigation }) => {
  return (
    <Container>
      <Image
        uri={require("../../assets/logo.png")}
        imageStyle={{ borderRadius: 8 }}
      />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </Container>
  );
};

export default Login;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;
