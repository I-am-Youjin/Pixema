import React from "react";
import { StyledBtnWrapper, BtnText } from "./styles";
import Spinner from "../Spinner/Spinner";

const BtnShowMore = () => {
  return (
    <StyledBtnWrapper>
      <BtnText>Show more</BtnText>
      <Spinner />
    </StyledBtnWrapper>
  );
};

export default BtnShowMore;
