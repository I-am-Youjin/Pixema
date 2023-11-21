import { StyledBtnWrapper, BtnText } from "./styles";
import Spinner from "../Spinner/Spinner";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";

const BtnShowMore = () => {
  const filmsFetchResult = +useTypedSelector((state) => state.films.results);
  const pageLimit = Math.round(filmsFetchResult / 10);
  const films = useTypedSelector((state) => state.films.allFilms);
  const type = useTypedSelector((state) => state.filter.type);
  const year = useTypedSelector((state) => state.filter.year);
  const searchParams = useTypedSelector((state) => state.films.searchValue);
  const onPageFilmsCount = films ? films.length + 10 : 20;
  const isFetchingSelector = useTypedSelector((prop) => prop.isFetching);
  const { isFetching, showMoreAsync } = useActions();
  const handleFetch = () => {
    isFetching(true);
    showMoreAsync({
      s: searchParams?.s,
      page: Math.round(onPageFilmsCount / 10),
      type: type,
      y: year,
    });
  };
  if (pageLimit >= Math.round(onPageFilmsCount / 10)) {
    return (
      <StyledBtnWrapper isFetching={isFetchingSelector} onClick={handleFetch}>
        <BtnText>Show more</BtnText>
        <Spinner />
      </StyledBtnWrapper>
    );
  } else {
    return null;
  }
};

export default BtnShowMore;
