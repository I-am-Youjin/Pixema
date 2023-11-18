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
import { FilterBarPortal } from "../client/components/FilterBar/FilterBarPortal";
import UserTab from "../client/components/UserTab/UserTab";
import { NavBarPortal } from "../client/components/DesktopNavBar/NavBarPortal";

const Layout = () => {
  const [closeNav, setCloseNav] = useState(false);
  const [closeFilter, setCloseFilter] = useState(false);
  const handleBtnClick = () => {
    setCloseNav(!closeNav);
  };
  const handleToogleFilter = () => {
    setCloseFilter(!closeFilter);
  };

  return (
    <StyledLayout>
      <PermanentVisibleContent>
        <Header navIsOpened={closeNav}>
          <DesktopHeaderContent>
            <Logo navBarIsOpen={closeNav} />
            <SearchBar
              navIsOpened={false}
              isMobile={false}
              onClick={handleToogleFilter}
            ></SearchBar>
            <UserTab isDesktop={true} />
            <NavBarBtn isOpened={closeNav} onClick={handleBtnClick} />
          </DesktopHeaderContent>
          <SearchBar
            navIsOpened={closeNav}
            isMobile={true}
            onClick={handleToogleFilter}
          ></SearchBar>
        </Header>
        <Main navBarIsOpen={closeNav}>
          <DesktopNavBar isOpened={true} isDesktop={true} />
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </Main>
      </PermanentVisibleContent>
      <FilterBarPortal isOpened={closeFilter} onClick={handleToogleFilter} />
      <NavBarPortal isOpened={closeNav} isDesktop={false} />
    </StyledLayout>
  );
};

export default Layout;
