import React, { useRef, useState } from "react";
import { Button } from "react-native";
import styled from "styled-components";
import { Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(); // 이메일 -> 비밀번호로 포커스 이동

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        <Image
          uri={require("../../assets/logo.png")}
          imageStyle={{ borderRadius: 8 }}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          label="Password"
          value={password}
          ref={passwordRef}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
`;
