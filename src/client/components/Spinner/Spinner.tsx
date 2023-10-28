import React from "react";
import { ColorRing } from "react-loader-spinner";
import { StyledIconWrapper } from "./styled";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";

const Spinner = () => {
  const isFetching = useTypedSelector((prop) => prop.isFetching);

  return (
    <StyledIconWrapper isFetching={isFetching}>
      <ColorRing
        height="20"
        width="20"
        colors={["#7B61FF", "#7B61FF", "#7B61FF", "#7B61FF", "#7B61FF"]}
      />
    </StyledIconWrapper>
  );
};

export default Spinner;
