import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Button = ({
  containerStyle,
  title,
  onPress,
  isFilled = true,
  disabled,
}) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      isFilled={isFilled}
      disabled={disabled}
    >
      <Title isFilled={isFilled}>{title}</Title>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isFilled: PropTypes.bool,
  disabled: PropTypes.bool,
};

const Container = styled.Pressable`
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: ${({ theme, isFilled }) =>
    isFilled ? theme.buttonBackground : "transparent"};
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};
`;
