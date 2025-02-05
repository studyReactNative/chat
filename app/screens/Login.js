import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { login } from "../utils/firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const passwordRef = useRef(); // 이메일 -> 비밀번호로 포커스 이동
  const insets = useSafeAreaInsets();

  const handleEmailChange = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? "" : "Please verify yout email"
    );
  };

  const handlePasswordChange = (password) =>
    setPassword(removeWhitespace(password));

  const handleLoginButtonPress = async () => {
    try {
      const user = await login({ email, password });
      Alert.alert("Login Success", user.email);
    } catch (e) {
      Alert.alert("Login Error", e.message);
    }
  };

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container insets={insets}>
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
          onSubmitEditing={handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Login"
          onPress={handleLoginButtonPress}
          disabled={disabled}
        />
        <Button
          title="Sign up with email"
          onPress={() => navigation.navigate("Signup")}
          isFilled={false}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
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
