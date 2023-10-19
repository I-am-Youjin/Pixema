import React from "react";
import DesktopNavBar from "../../components/DesktopNavBar/DesktopNavBar";
import { StyledConteiner, ContentWrapper, FilmsWrapper } from "./styles";
import Header from "../../../Layout/Header/Header";
import FilmCard from "../../components/FilmCard/FilmCard";

const MainPage = () => {
  return (
    <StyledConteiner>
      <DesktopNavBar />
      <ContentWrapper>
        <Header></Header>
        <FilmsWrapper>
          <FilmCard></FilmCard>
          <FilmCard></FilmCard>
          <FilmCard></FilmCard>
          <FilmCard></FilmCard>
          <FilmCard></FilmCard>
        </FilmsWrapper>
      </ContentWrapper>
    </StyledConteiner>
  );
};

export default MainPage;
