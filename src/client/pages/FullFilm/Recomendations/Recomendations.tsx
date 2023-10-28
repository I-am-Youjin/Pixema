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
          slidesToShow: 1,
        },
      },
      // {
      //   breakpoint: 1810,
      //   settings: {
      //     slidesToShow: 3.5,
      //   },
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };
  const id = useParams();
  const films = useTypedSelector((state) => state.films.allFilms);
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
