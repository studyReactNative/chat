import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Channel = () => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Channel</Text>
    </Container>
  );
};

export default Channel;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
