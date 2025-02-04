import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";
import styled from "styled-components";

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur = () => {},
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledTextInput
          isFocused={isFocused}
          value={value}
          ref={ref}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none" // iOS only
          underlineColorAndroid="transparent" // android only
        />
      </Container>
    );
  }
);

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(["done", "next"]),
  maxLength: PropTypes.number,
};

const Container = styled.View`
  width: 100%;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.Text`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme, isFocused }) => (isFocused ? theme.text : theme.label)};
`;

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))`
  padding: 20px 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
  border-radius: 4px;
`;
