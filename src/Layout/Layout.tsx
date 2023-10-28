import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { Outlet } from "react-router-dom";
import { StyledLayout, ContentWrapper } from "./styles";
import DesktopNavBar from "../client/components/DesktopNavBar/DesktopNavBar";

const Layout = () => {
  return (
    <StyledLayout>
      <Main>
        <Header></Header>
        <ContentWrapper>
          <DesktopNavBar />
          <Outlet />
        </ContentWrapper>
      </Main>
    </StyledLayout>
  );
};

export default Layout;
