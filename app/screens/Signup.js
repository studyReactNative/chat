import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { removeWhitespace, validateEmail } from "../utils/common";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Image, Input } from "../components";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [photoUrl, setPhotoUrl] = useState(
    require("../../assets/default_profile.png")
  );

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const didMountRef = useRef();

  // 유효성 검사
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    let error = "";
    if (!name) error = "Please enter your name.";
    else if (!validateEmail(email)) error = "Please verify your email.";
    else if (password.length < 6)
      error = "The password must contain 6 characters at least.";
    else if (password !== passwordConfirm) error = "Password neet to match";
    setErrorMessage(error);
  }, [name, email, password, passwordConfirm]);

  // 버튼 활성화
  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [name, email, password, passwordConfirm, errorMessage]);

  const handleSignupButtonPress = () => {};

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Image
          uri={photoUrl}
          rounded
          showButton
          onChangeImage={(url) => setPhotoUrl(url)}
        />
        <Input
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => {
            setName(name.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setName(name.trim())}
          placeholder="Name"
          returnKeyType="next"
        />
        <Input
          ref={emailRef}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(removeWhitespace(text))}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(removeWhitespace(text))}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          placeholder="Password"
          returnKeyType="next"
          isPassword
        />
        <Input
          ref={passwordConfirmRef}
          label="Password Confirm"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={handleSignupButtonPress}
          placeholder="Password Confirm"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Sign Up"
          onPress={handleSignupButtonPress}
          disabled={disabled}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
`;

const ErrorText = styled.Text`
  width: 100%;
  height: 20px;
  align-items: flex-start;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;
