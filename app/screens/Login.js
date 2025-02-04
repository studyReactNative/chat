import React, { useRef, useState } from "react";
import { Button } from "react-native";
import styled from "styled-components";
import { Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(); // 이메일 -> 비밀번호로 포커스 이동
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? "" : "Please verify yout email"
    );
  };

  const handlePasswordChange = (password) =>
    setPassword(removeWhitespace(password));

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
          onChangeText={handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          label="Password"
          value={password}
          ref={passwordRef}
          onChangeText={handlePasswordChange}
          onSubmitEditing={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
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

const ErrorText = styled.Text`
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  align-items: flex-start;
  color: ${({ theme }) => theme.errorText};
  line-height: 20px;
`;
