import React from "react";
import {
  Title,
  StyledTitleWrapper,
  StyledFilmsWrapper,
  ComponentWrapper,
} from "./styles";
import FilmCard from "../../../components/FilmCard/FilmCard";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recomendations = () => {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    lazyload: true,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1860,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
        },
      },
      // {
      //   breakpoint: 1800,
      //   settings: {
      //     slidesToShow: 3.5,
      //   },
      // },
      // {
      //   breakpoint: 1740,
      //   settings: {
      //     slidesToShow: 3.1,
      //   },
      // },
      // {
      //   breakpoint: 1660,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
      // {
      //   breakpoint: 1600,
      //   settings: {
      //     slidesToShow: 2.8,
      //   },
      // },
      // {
      //   breakpoint: 1580,
      //   settings: {
      //     slidesToShow: 2.8,
      //   },
      // },
      // {
      //   breakpoint: 1510,
      //   settings: {
      //     slidesToShow: 2.6,
      //   },
      // },
      // {
      //   breakpoint: 1440,
      //   settings: {
      //     slidesToShow: 2,
      //   },
      // },
      // {
      //   breakpoint: 1370,
      //   settings: {
      //     slidesToShow: 1.8,
      //   },
      // },
    ],
  };
  const id = useParams();
  const films = useTypedSelector((state: any) => state.films.allFilms);
  return (
    <ComponentWrapper>
      <StyledTitleWrapper>
        <Title>Recomendations</Title>
      </StyledTitleWrapper>
      <StyledFilmsWrapper className="content">
        <Slider {...sliderSettings}>
          {films &&
            films
              .filter((film: any) => film.imdbID !== id.imdbID)
              .map((film: any) => <FilmCard filmData={film} />)}
        </Slider>
      </StyledFilmsWrapper>
    </ComponentWrapper>
  );
};

export default Recomendations;
