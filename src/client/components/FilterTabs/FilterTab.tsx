import React, { useEffect, useState } from "react";
import { TabConteiner, StyledTitle } from "./styles";
import { ITab } from "../../../types/types";

const FilterTab: React.FC<ITab> = ({ title, onClick, visability }) => {
  const [invisible, setInvisible] = useState(visability);
  const handleClick = () => {
    onClick();
    setInvisible(!invisible);
  };

  useEffect(() => {
    setInvisible(visability);
  }, [visability]);

  return (
    <TabConteiner $isVisible={invisible}>
      <StyledTitle>{title}</StyledTitle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={handleClick}
      >
        <path
          d="M16.8187 8.20977C17.1201 7.88669 17.1111 7.37152 16.7987 7.0591C16.4863 6.74668 15.9887 6.75532 15.6873 7.0784L12.2796 10.7315L8.72611 7.29943C8.40831 6.99248 7.89306 6.99248 7.57526 7.29943C7.25746 7.60637 7.25746 8.10403 7.57526 8.41098L11.1887 11.901L7.79986 15.5338C7.49848 15.8569 7.50742 16.3721 7.81984 16.6845C8.13226 16.9969 8.62985 16.9883 8.93123 16.6652L12.339 13.012L15.8924 16.4441C16.2102 16.7511 16.7255 16.7511 17.0433 16.4441C17.3611 16.1372 17.3611 15.6395 17.0433 15.3326L13.4299 11.8426L16.8187 8.20977Z"
          fill="#AFB2B6"
        />
      </svg>
    </TabConteiner>
  );
};

export default FilterTab;
