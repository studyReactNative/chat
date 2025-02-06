import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { Spinner } from "../components";
import { useContext } from "react";
import { ProgressContext } from "../contexts/Progress";
import MainStack from "./MainStack";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);

  return (
    <NavigationContainer>
      <MainStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
