import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = ({ uri, imageStyle, rounded = false }) => {
  return (
    <Container>
      <StyledImage source={uri} style={imageStyle} rounded={rounded} />
    </Container>
  );
};

export default Image;

Image.propTypes = {
  imageStyle: PropTypes.object,
  rounded: PropTypes.bool,
};

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.imageBackground};
  border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
`;
