import React from "react";
import { StyledLabel, StyledInput } from "./styles";
import { ICustomInput } from "../../../types/types";

const CustomInput: React.FC<ICustomInput> = ({
  lable,
  type,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <StyledLabel>
      {lable}
      <StyledInput
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </StyledLabel>
  );
};

export default CustomInput;
