import React from "react";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import {
  PageWrapper,
  LeftContainer,
  RightContainer,
  ImgWrapper,
  StyledImg,
  ContainerWithText,
  GenresAndDiscriptionTypeText,
  Title,
  RateMarksWrapper,
  InfoMarker,
  MarksText,
  PlotAndDiscritionText,
  DiscriptionConteiner,
  DiscriptionTypeConteiner,
  InnerDiscriptionConteiner,
} from "./styles";
import SetFavoriteShareBtn from "./SetFavotiteShareBtn/SetFavoriteShareBtn";
import RateMarker from "../../components/FilmCard/RateMarker/RateMarker";
import Recomendations from "./Recomendations/Recomendations";
const FullFilm = () => {
  const film = useTypedSelector((state: any) => state.films.receivedFilm);

  return (
    film && (
      <PageWrapper>
        <LeftContainer>
          <ImgWrapper>
            <StyledImg src={film.Poster}></StyledImg>
          </ImgWrapper>
          <SetFavoriteShareBtn />
        </LeftContainer>
        <RightContainer>
          <ContainerWithText>
            <GenresAndDiscriptionTypeText>
              {film.Genre.replaceAll(", ", " · ")}
            </GenresAndDiscriptionTypeText>
            <Title>{film.Title}</Title>
            <RateMarksWrapper>
              <RateMarker isAbsolute={false}>{film.imdbRating}</RateMarker>
              <InfoMarker>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="12"
                  viewBox="0 0 32 12"
                  fill="none"
                >
                  <path
                    d="M0 0H3.27851V11.8282H0V0ZM14.7185 0V11.8282H11.8589L11.8463 3.84205L10.7058 11.8282H8.65996L7.4672 4.014L7.45373 11.8282H4.59478V0H8.83638C8.9487 0.718378 9.07805 1.55864 9.22916 2.52018L9.69545 5.52349L10.4498 0H14.7185ZM19.3033 2.01651V9.81169C19.7704 9.81169 20.0585 9.72283 20.1656 9.54388C20.272 9.36554 20.3269 8.8815 20.3269 8.09206V3.48735C20.3269 2.95036 20.3086 2.60661 20.272 2.45612C20.2355 2.30395 20.1544 2.19302 20.026 2.12272C19.8989 2.05136 19.6581 2.01651 19.3033 2.01651ZM16.0257 0H18.4739C20.0542 0 21.124 0.0681703 21.6807 0.204359C22.2383 0.341309 22.6624 0.565603 22.9521 0.876022C23.2418 1.18888 23.4235 1.5349 23.4962 1.91836C23.5697 2.30091 23.6062 3.05094 23.6062 4.17088V8.31392C23.6062 9.37604 23.552 10.0851 23.4465 10.443C23.3402 10.8011 23.1552 11.0811 22.8898 11.2841C22.6254 11.4858 22.2992 11.627 21.9106 11.7084C21.5219 11.7883 20.9368 11.8282 20.1536 11.8282H16.0259V0H16.0257ZM28.8526 4.89702C28.8526 4.39731 28.8181 4.07182 28.7496 3.91798C28.6811 3.76505 28.5486 3.68821 28.3482 3.68821C28.153 3.68821 28.0264 3.75562 27.9687 3.88785C27.9106 4.02161 27.8819 4.35835 27.8819 4.89687V9.06303C27.8819 9.58253 27.9149 9.91456 27.9807 10.0602C28.0455 10.2067 28.1766 10.2781 28.3708 10.2781C28.5702 10.2781 28.7002 10.204 28.7608 10.053C28.8216 9.90178 28.8521 9.54069 28.8521 8.96732L28.8526 4.89702ZM27.8819 0V2.81554C28.1427 2.53038 28.4328 2.31734 28.752 2.1772C29.0735 2.03766 29.4218 1.96736 29.7969 1.96736C30.2283 1.96736 30.6029 2.03081 30.9213 2.15666C31.239 2.28417 31.4814 2.4616 31.648 2.68969C31.8143 2.91855 31.9151 3.14285 31.9494 3.36136C31.9823 3.58002 32 4.04641 32 4.76159V9.12481C32 9.83543 31.9494 10.3644 31.8465 10.7122C31.746 11.0605 31.5058 11.3624 31.131 11.6175C30.7553 11.8725 30.3098 12 29.7938 12C29.423 12 29.0774 11.9239 28.7562 11.7717C28.4345 11.619 28.1405 11.3907 27.8759 11.0876L27.6724 11.8282H24.7352V0H27.8819Z"
                    fill="white"
                  />
                </svg>
                <MarksText>{film.imdbRating}</MarksText>
              </InfoMarker>
              <InfoMarker>
                <MarksText>{film.Runtime}</MarksText>
              </InfoMarker>
            </RateMarksWrapper>
            <PlotAndDiscritionText>{film.Plot}</PlotAndDiscritionText>
            <DiscriptionConteiner>
              <DiscriptionTypeConteiner>
                <GenresAndDiscriptionTypeText>
                  Year
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  Released
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  BoxOffice
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  Country
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  Production
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  Actors
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  Director
                </GenresAndDiscriptionTypeText>
                <GenresAndDiscriptionTypeText>
                  Writers
                </GenresAndDiscriptionTypeText>
              </DiscriptionTypeConteiner>
              <InnerDiscriptionConteiner>
                <PlotAndDiscritionText>{film.Year}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.Released}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.BoxOffice}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.Country}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.Production}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.Actors}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.Director}</PlotAndDiscritionText>
                <PlotAndDiscritionText>{film.Writer}</PlotAndDiscritionText>
              </InnerDiscriptionConteiner>
            </DiscriptionConteiner>
          </ContainerWithText>
          <Recomendations />
        </RightContainer>
      </PageWrapper>
    )
  );
};

export default FullFilm;
