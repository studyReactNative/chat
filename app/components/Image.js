import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = ({ uri, imageStyle }) => {
  return (
    <Container>
      <StyledImage source={uri} style={imageStyle} />
    </Container>
  );
};

export default Image;

Image.propTypes = {
  imageStyle: PropTypes.object,
};

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.imageBackground};
`;
