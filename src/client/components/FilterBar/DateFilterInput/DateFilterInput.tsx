import React, { MutableRefObject, useRef, useEffect } from "react";
import { StyledLable, StyledInput } from "./styles";
import { useActions } from "../../../../store/hooks/useActions";
import debounce from "lodash.debounce";
import { IInput } from "../../../../types/types";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";

const DateFilterInput = () => {
  const { setYearFilter } = useActions();
  const inputRef = useRef(null);
  const filteringYearValue = useTypedSelector(
    (state) => state.films.searchValue.y
  );

  const handleChange = (event: any) => {
    setYearFilter(event.target.value);
  };

  const debouncedHandle = debounce(handleChange, 300);

  useEffect(() => {
    if (filteringYearValue === "") {
      (inputRef.current as any).value = "";
    }
  }, [filteringYearValue]);

  return (
    <StyledLable>
      <StyledInput
        ref={inputRef}
        type="text"
        placeholder="Enter filtering date..."
        maxLength={4}
        onChange={debouncedHandle}
      />
      Year
    </StyledLable>
  );
};

export default DateFilterInput;
