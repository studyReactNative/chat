import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Profile</Text>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
