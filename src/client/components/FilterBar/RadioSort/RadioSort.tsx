import React, { useState } from "react";
import {
  StyledWrapper,
  StyledRadioWrapper,
  Title,
  CustomRadioLabel,
  CustomRadioInput,
} from "./styles";
import { useActions } from "../../../../store/hooks/useActions";

const RadioSort = () => {
  const [value, setValue] = useState("year");
  const { toggleSort } = useActions();

  const handleSetValue = (event: any) => {
    setValue(event.target.value);
    toggleSort(event.target.value);
  };

  return (
    <StyledWrapper>
      <Title>Sort by</Title>
      <StyledRadioWrapper>
        <CustomRadioLabel htmlFor="rating" $isChecked={value === "rating"}>
          <CustomRadioInput
            type="radio"
            checked={value === "rating"}
            value="rating"
            id="rating"
            onClick={handleSetValue}
          />
          Rating
        </CustomRadioLabel>
        <CustomRadioLabel htmlFor="year" $isChecked={value === "year"}>
          <CustomRadioInput
            type="radio"
            checked={value === "year"}
            value="year"
            id="year"
            onClick={handleSetValue}
          />
          Year
        </CustomRadioLabel>
      </StyledRadioWrapper>
    </StyledWrapper>
  );
};

export default RadioSort;
