import React, { useState, useEffect } from "react";
import { StyledWrapper, Title, InputsWrapper } from "./styles";
import CustomRadioInput from "./CustomRadioInput";
import { useActions } from "../../../../store/hooks/useActions";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";

const RadioFilterType = () => {
  const [typeValue, setTypeValue] = useState("");
  const { setTypeFilter } = useActions();
  const type = useTypedSelector((state) => state.filter.type);

  const handleSetTypeValue = (event: any) => {
    setTypeValue(event.target.value);
    setTypeFilter(event.target.value);
  };

  useEffect(() => {
    setTypeValue(type);
  }, [type]);

  return (
    <StyledWrapper>
      <Title>Type</Title>
      <InputsWrapper>
        <CustomRadioInput
          label="None"
          checked={typeValue === ""}
          value=""
          onClick={handleSetTypeValue}
        ></CustomRadioInput>
        <CustomRadioInput
          label="Movie"
          checked={typeValue === "movie"}
          value="movie"
          onClick={handleSetTypeValue}
        ></CustomRadioInput>
        <CustomRadioInput
          label="Series"
          checked={typeValue === "series"}
          value="series"
          onClick={handleSetTypeValue}
        ></CustomRadioInput>
        <CustomRadioInput
          label="Episode"
          checked={typeValue === "episode"}
          value="episode"
          onClick={handleSetTypeValue}
        ></CustomRadioInput>
      </InputsWrapper>
    </StyledWrapper>
  );
};

export default RadioFilterType;
