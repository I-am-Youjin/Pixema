import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledInput, StyledInputWrapper } from "./styles";
import { useActions } from "../../../store/hooks/useActions";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { debounce } from "../helpers";
import FilterIcon from "./FilterIcon/FilterIcon";
import { ISearchBar } from "../../../types/types";

const SearchBar: React.FC<ISearchBar> = ({
  isMobile,
  navIsOpened,
  onClick,
}) => {
  const [value, setValue] = useState<string>();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { getFilmsAsync, getFilmsRatingAsync } = useActions();
  const searchStatus = useTypedSelector(
    (state) => state.films.searchValue?.respStatus
  );
  const year = useTypedSelector((state) => state.films.searchValue.year);
  const type = useTypedSelector((state) => state.films.searchValue.type);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    navigate("/");
  };

  // const clearInput = () => {
  //   (inputRef.current! as any).value = "";
  //   setValue("");
  // };

  const debounceOnChange = useCallback(debounce(handleChange, 500), []);

  useEffect(() => {
    if (value) {
      getFilmsRatingAsync();
      getFilmsAsync({ s: value, type: type, y: year });
    } else {
      getFilmsRatingAsync();
      getFilmsAsync({ s: "man", type: type, y: year });
    }
  }, [value]);

  return (
    <StyledInputWrapper $isMobile={isMobile}>
      <StyledInput
        $navIsOpened={navIsOpened}
        $isMobile={isMobile}
        ref={inputRef}
        type="text"
        placeholder="Search..."
        onChange={debounceOnChange}
        onClick={handleClick}
        $searchStatus={searchStatus}
      />
      <FilterIcon onClick={onClick}></FilterIcon>
    </StyledInputWrapper>
  );
};

export default SearchBar;
