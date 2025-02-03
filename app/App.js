import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { StatusBar, Text } from "react-native";
import * as Font from "expo-font";
import { SplashScreen } from "expo-router";

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string")
      return Image.prefetch(image); // 네트워크 이미지 캐싱
    else return Promise.resolve(); // 로컬 이미지는 캐싱 불필요
  });
};

const cacheFonts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

SplashScreen.preventAutoHideAsync(); // 스플래시 화면 유지

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = async () => {
    const imageAssets = cacheImages([require("../assets/chat.png")]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
    setIsReady(true);
    await SplashScreen.hideAsync(); // 리소스 로딩 후 스플래시 화면 숨기기
  };

  useEffect(() => {
    loadAssets();
  }, []);

  return isReady ? (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  ) : (
    <></>
  );
};

export default App;
