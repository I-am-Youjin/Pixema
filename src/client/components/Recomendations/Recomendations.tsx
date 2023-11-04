import React, { LegacyRef, useState, useRef, useEffect } from "react";
import {
  Title,
  StyledTitleWrapper,
  StyledFilmsWrapper,
  ComponentWrapper,
  StyledCarouselButton,
  ButtonWrapper,
} from "./styles";
import FilmCard from "../FilmCard/FilmCard";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import debounce from "lodash.debounce";

const Recomendations = () => {
  const id = useParams();
  const films = useTypedSelector((state: any) => state.films.allFilms);

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);

  const checkForScrollPosition = () => {
    const { current } = listRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.floor(scrollLeft) !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 300);

  const windowWidth: number = window.screen.width;

  let distance: number;

  if (windowWidth >= 1280) {
    distance = 306;
  } else if (windowWidth >= 528) {
    distance = 240;
  } else {
    distance = 304;
  }

  const scrollContainerBy = (distance: number) =>
    listRef.current?.scrollBy({ left: distance, behavior: "smooth" });

  useEffect(() => {
    const { current } = listRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  return (
    <ComponentWrapper>
      <StyledTitleWrapper>
        <Title>Recomendations</Title>
        <ButtonWrapper>
          <StyledCarouselButton
            onClick={() => scrollContainerBy(-distance)}
            disabled={!canScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929L8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289C10.5976 6.68342 10.5976 7.31658 10.2071 7.70711L6.91421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H6.91421L10.2071 16.2929C10.5976 16.6834 10.5976 17.3166 10.2071 17.7071Z"
                fill="white"
              />
            </svg>
          </StyledCarouselButton>
          <StyledCarouselButton
            onClick={() => scrollContainerBy(distance)}
            disabled={!canScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7929 17.7071C14.1834 18.0976 14.8166 18.0976 15.2071 17.7071L20.2071 12.7071C20.5976 12.3166 20.5976 11.6834 20.2071 11.2929L15.2071 6.29289C14.8166 5.90237 14.1834 5.90237 13.7929 6.29289C13.4024 6.68342 13.4024 7.31658 13.7929 7.70711L17.0858 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H17.0858L13.7929 16.2929C13.4024 16.6834 13.4024 17.3166 13.7929 17.7071Z"
                fill="white"
              />
            </svg>
          </StyledCarouselButton>
        </ButtonWrapper>
      </StyledTitleWrapper>
      <StyledFilmsWrapper className="content" ref={listRef}>
        {films &&
          films
            .filter((film: any) => film.imdbID !== id.imdbID)
            .map((film: any) => (
              <li>
                <FilmCard filmData={film} />
              </li>
            ))}
      </StyledFilmsWrapper>
    </ComponentWrapper>
  );
};

export default Recomendations;
