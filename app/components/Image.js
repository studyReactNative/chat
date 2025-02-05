import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const PhotoButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};

const Image = ({
  uri,
  imageStyle,
  rounded = false,
  showButton = false,
  onChangeImage = () => {},
}) => {
  const pickImage = async () => {
    // 사진첩 접근 권한 요청
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Please turn on the camera roll permissions.");
      return;
    }

    // 기기의 사진첩에서 이미지 선택
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) onChangeImage({ uri: result.assets[0].uri });
  };

  return (
    <Container>
      <StyledImage source={uri} style={imageStyle} rounded={rounded} />
      {showButton && <PhotoButton onPress={pickImage} />}
    </Container>
  );
};

export default Image;

Image.propTypes = {
  imageStyle: PropTypes.object,
  rounded: PropTypes.bool,
  showButton: PropTypes.bool,
  onChangeImage: PropTypes.func,
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

const ButtonContainer = styled.Pressable`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.imageButtonBackground};
`;

const ButtonIcon = styled(MaterialIcons).attrs({
  name: "photo-camera",
  size: 22,
})`
  color: ${({ theme }) => theme.imageButtonIcon};
`;
