import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { Outlet } from "react-router-dom";
import {
  StyledLayout,
  ContentWrapper,
  PermanentVisibleContent,
  DesktopHeaderContent,
} from "./styles";
import DesktopNavBar from "../client/components/DesktopNavBar/DesktopNavBar";
import SearchBar from "./../client/components/SearchBar/SearchBar";
import Logo from "./../client/components/Logo/Logo";
import NavBarBtn from "./../client/components/NavBarBtn/NavBarBtn";

const Layout = () => {
  const [close, setClose] = useState(false);
  const handleBtnClick = () => {
    setClose(!close);
  };

  return (
    <StyledLayout>
      <PermanentVisibleContent>
        <Header navIsOpened={close}>
          <DesktopHeaderContent>
            <Logo navBarIsOpen={close} />
            <SearchBar navIsOpened={false} isMobile={false}></SearchBar>
            <NavBarBtn isOpened={close} onClick={handleBtnClick} />
          </DesktopHeaderContent>
          <SearchBar navIsOpened={close} isMobile={true}></SearchBar>
        </Header>
        <Main navBarIsOpen={close}>
          <DesktopNavBar isOpened={true} isDesktop={true} />
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
          <DesktopNavBar isOpened={close} isDesktop={false} />
        </Main>
      </PermanentVisibleContent>
    </StyledLayout>
  );
};

export default Layout;
