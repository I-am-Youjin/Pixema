import React from "react";
import Header from "./Header/Header";
// import Footer from "./footer/Footer";
import Main from "./Main/Main";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./styles";
import MainPage from "../client/pages/MainPage/MainPage";

const Layout = () => {
  return (
    <StyledLayout>
      <Main>
        <MainPage></MainPage>
        <Outlet />
      </Main>
      {/* <Footer></Footer> */}
    </StyledLayout>
  );
};

export default Layout;
