import { FilmsWrapper, StyledWrapper, StyledText } from "./styles";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { FilmBySearch } from "../../../types/types";
import BtnShowMore from "../../components/BtnShowMore/BtnShowMore";
import FilterTabs from "../../components/FilterTabs/FilterTabs";

const MainPage = () => {
  const films = useTypedSelector((state) => state.films.allFilms);
  const resp = useTypedSelector((state) => state.films.searchValue.respStatus);
  const type = useTypedSelector((state) => state.films.searchValue.type);
  const year = useTypedSelector((state) => state.films.searchValue.y);
  const rating = useTypedSelector((state) => state.films.filmsRating);
  const sortBy = useTypedSelector((state) => state.filter.sortBy);

  return (
    <div>
      {type || year ? <FilterTabs /> : null}
      {resp ? (
        <StyledWrapper>
          <FilmsWrapper>
            {films &&
              rating &&
              films
                .sort((a: any, b: any) => {
                  if (sortBy === "rating") {
                    return a["rating"] > b["rating"] ? -1 : 1;
                  } else {
                    return a["Year"] > b["Year"] ? -1 : 1;
                  }
                })
                .map((film: FilmBySearch) => <FilmCard filmData={film} />)}
          </FilmsWrapper>
          <BtnShowMore />
        </StyledWrapper>
      ) : (
        <StyledText>Ooooops... Films not found:(</StyledText>
      )}
    </div>
  );
};

export default MainPage;
