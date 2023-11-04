import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledInput } from "./styles";
import { useActions } from "../../../store/hooks/useActions";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { debounce } from "../helpers";

interface ISerachBar {
  isMobile: boolean;
  navIsOpened: boolean;
}

const SearchBar: React.FC<ISerachBar> = ({ isMobile, navIsOpened }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { getFilmsAsync, getFilmsRatingAsync, setFilmsRating } = useActions();
  const searchStatus = useTypedSelector(
    (state) => state.films.searchValue?.respStatus
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    navigate("/");
  };

  const clearInput = () => {
    (inputRef.current! as any).value = "";
    setValue("");
  };

  const debounceOnChange = useCallback(debounce(handleChange, 500), []);

  useEffect(() => {
    if (value) {
      getFilmsRatingAsync();
      getFilmsAsync({ s: value });
    } else {
      getFilmsRatingAsync();
      getFilmsAsync();
    }
  }, [value]);

  return (
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
  );
};

export default SearchBar;
