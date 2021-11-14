import React from "react";
import { HeaderContainer, Title } from "./styed";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../store/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <HeaderContainer>
      <Title>The Weather App</Title>
    </HeaderContainer>
  );
};

export default Header;
