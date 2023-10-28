import React, { useState } from "react";
import { StyledBtnWrapper, BtnText } from "./styles";
import Spinner from "../Spinner/Spinner";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import { get } from "http";

const BtnShowMore = () => {
  const [page, setPage] = useState(2);
  const filmsFetchResult = +useTypedSelector((state) => state.films.results);
  const pageLimit = Math.round(filmsFetchResult / 10);
  const films = useTypedSelector((state) => state.films.allFilms);
  const onPageFilmsCount = films ? films.length + 10 : 20;
  const isFetchingSelector = useTypedSelector((prop) => prop.isFetching);
  const { isFetching, getFilmsAsync, getFilmsRatingAsync } = useActions();
  const handleFetch = () => {
    isFetching(true);
    getFilmsAsync({ page: Math.round(onPageFilmsCount / 10) });
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
